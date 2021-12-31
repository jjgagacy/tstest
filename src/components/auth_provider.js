import React from 'react';
import {fakeAuth} from "./auth";
import {useLocation, useNavigate, Navigate } from "react-router-dom";

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser, callback) => {
        return fakeAuth.signin(() => {
            setUser(newUser);
            callback();
        })
    }

    let signout = (callback) => {
        return fakeAuth.signout(() => {
            setUser(null);
            callback();
        })
    }

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
    return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to={'/login'} state={{ from: location }} replace />;
    }

    return children;
}

export { AuthProvider, RequireAuth, useAuth }
