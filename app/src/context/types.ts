import { createContext, ReactNode } from "react";
import { IAuthContextType, IProfileContextType } from "../@types/types";

export interface IProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as IProfileContextType)

export const AuthContext = createContext({} as IAuthContextType)