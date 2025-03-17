import { useContext, ReactElement } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/types"

export function PrivateRoute({ element }: { element: ReactElement }) {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? element : <Navigate to="/" />;
}