import { createContext, ReactNode } from "react";
import { IProfileContextType } from "../@types/types";

export interface IProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as IProfileContextType)