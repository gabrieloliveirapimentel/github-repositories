import express, { Request } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const URL = process.env.APP_URL;
const SERVER_URL = process.env.SERVER_URL;

const CLIENT_ID = process.env.GITHUB_USER_ID;
const CLIENT_SECRET = process.env.GITHUB_USER_SECRET;

app.get("/auth/callback", async (req: Request, res: any) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send("Código de autorização ausente");
    }

    try {
        const response = await axios.post("https://github.com/login/oauth/access_token", {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
        }, {
            headers: { Accept: "application/json" }
        });

        const accessToken = response.data.access_token;
        
        //res.json({ access_token: accessToken });
        res.redirect(`${URL}/?token=${accessToken}`)
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao autenticar");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${SERVER_URL}`);
});
