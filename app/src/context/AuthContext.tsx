import { useState } from "react";
import { IProviderProps, AuthContext } from "./types";

export function AuthProvider ({ children }: IProviderProps) {
    const [token, setToken] = useState({} as string);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleLogin(accessToken: string) {
        setToken(accessToken);
        setIsAuthenticated(true);
    }

    function handleLogout() {
        setToken('');
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
