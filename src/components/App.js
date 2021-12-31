import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Index from './index';
import About from './about';
import Contact from "./contact";
import Count from "./count";
import NoMatch from "./no_match";
import Layout from "../layouts/layout";
import {AuthProvider, RequireAuth} from "./auth_provider";
import User from "./user";
import Login from "./login";

function App() {
    return (
        <div>
            <AuthProvider children={
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index/>}/>
                        <Route element={<Layout/>}>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/count" element={<Count/>}/>
                            <Route path="/login" element={<Login />}/>
                            <Route path="/user" element={<RequireAuth children={<User />} /> }/>
                            <Route path={'*'} element={<NoMatch/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            }>
            </AuthProvider>
        </div>
    )
}

export default App;

