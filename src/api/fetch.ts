import { api } from "../lib/axios"

const USER = import.meta.env.VITE_GITHUB_USER;
const TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

const GetUser = async () => {
    const data = await api.get(`users/${USER}`)

    return data
}

const GetRepositoriesByUser = async () => {
    const data = await api.get(`search/repositories?q=user:${USER}&sort=updated&order=desc`, {
        headers: { Authorization: `Bearer ${TOKEN}` }
    })

    return data
}

export { GetUser, GetRepositoriesByUser }