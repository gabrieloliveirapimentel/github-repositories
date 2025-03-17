import { useCallback, useEffect, useState, useContext } from "react";
import { IRepository, IProfile } from "../@types/types";
import { AuthContext, IProviderProps, ProfileContext } from "./types";
import { GetUser, GetRepositoriesByUser } from "../api/fetch";

export function ProfileProvider({ children}: IProviderProps) {
    const { token } = useContext(AuthContext)
    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [repositories, setRepositories] = useState<IRepository[]>([])
    
    const fetchProfile = useCallback(async () => {
        try {
            const response = await GetUser() 
            setProfile(response.data)
        } catch (error) {
            console.error('Failed to fetch profile:', error)
        }
    }, [])

    const fetchRepositoriesByUser = useCallback(async (page: number) => {
        try {
            const response = await GetRepositoriesByUser(page, token)
            setRepositories(response.data.items)
        } catch (error) {
            console.error('Failed to fetch repositories by user:', error)
        }
    }, [token])

    useEffect(() => {
        fetchProfile()
    },[fetchProfile])

    return (
        <ProfileContext.Provider value={{profile, repositories, fetchRepositoriesByUser}}>
            {children}
        </ProfileContext.Provider>
    )
}