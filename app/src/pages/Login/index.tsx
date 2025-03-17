import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/types";
import { useSearchParams, useNavigate } from "react-router";

import { Header } from "../../components/Header";
import { Container } from "./styles";

import { FaGithub } from "react-icons/fa6"

export function Login() {
    const { handleLogin } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const CLIENT_ID = import.meta.env.VITE_GITHUB_USER_ID;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

    useEffect(() => {
        const token = searchParams.get("token");

        if (token) {
            handleLogin(token);
            navigate("/home");
        }
    }, [searchParams, handleLogin, navigate]);

    const handleLoginWithGitHub = () => {
        const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user&redirect_uri=${REDIRECT_URI}`;
        window.location.href = url;
    };

    return (
        <div>
            <Header />
            <Container>
                <button onClick={handleLoginWithGitHub}>
                    <FaGithub fontSize={16} /> 
                    <span>Entrar com GitHub</span>
                </button>
            </Container>
        </div>
    );
}
