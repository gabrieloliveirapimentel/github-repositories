import { api } from "../lib/axios"

const GetUser = async () => {
    const data = await api.get('users/gabrieloliveirapimentel')

    return data
}

const GetRepositoriesByUser = async () => {
    const data = await api.get('users/gabrieloliveirapimentel/repos')

    return data
}

export { GetUser, GetRepositoriesByUser }