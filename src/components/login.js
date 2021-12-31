import React, { Component } from 'react';
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "./auth_provider";
function Login() {
    let navigate = useNavigate();
    let location = useLocation();

    let auth = useAuth();
    // @ts-ignore
    let from = location.state?.from?.pathname || '/';

    function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => {
            navigate(from, { replace: true });
        })
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                    {' '}
                    <button type="submit">Login</button>
                </label>
            </form>
        </div>
    )
}
export default Login;
