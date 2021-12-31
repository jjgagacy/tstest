import React, { Component } from 'react';
import {useAuth} from "./auth_provider";
import {useNavigate} from "react-router-dom";

function User() {
    let navigate = useNavigate();
    let auth = useAuth();

    return (
        <div>
            <h3>Welcome {auth.user}!</h3>
            <button onClick={() => {
                auth.signout(() => navigate('/'))
            }}>Sign out</button>
        </div>
    )
}

export default User;
