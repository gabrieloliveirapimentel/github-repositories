import { api } from "../lib/axios"

const USER = import.meta.env.VITE_GITHUB_USER;

const GetUser = async () => {
    const data = await api.get(`users/${USER}`)

    return data
}

const GetRepositoriesByUser = async (page: number, token: string) => {
    const data = await api.get(`search/repositories?q=user:${USER}&sort=updated&order=desc&per_page=10&page=${page}`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    return data
}

export { GetUser, GetRepositoriesByUser }