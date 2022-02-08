import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import './App.css'

import Logo from '../section/logo/Logo'
import Main from '../section/main/Main'
import Footer from '../section/footer/Footer'
import Nav from '../section/nav/Nav'
import LoginPage from "../../pages/login/LoginPage"
import Register from "../../pages/register/Register"

function Navigate({ children }) {
    let classRoot;
    const { pathname } = useLocation();

    switch (pathname) {
        case '/':
            classRoot = 'app'
            break;
        case '/signup':
            classRoot = 'signup'
            break;
        case '/login':
            classRoot = 'login'
            break;
        default:
            console.log('pathname', pathname)
    }

    return (
        <div className={classRoot}>
            {children}
        </div>
    )
}


export default function App() {
    return (
        <>

            
                <Router>
                    <Navigate>
                        <Logo />
                        {/* <Nav /> */}
                        <Routes>
                            <Route path="/adocao" element={<Main />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<Register />} />
                        </Routes>
                    </Navigate>
                </Router>
                <Footer />
        </>
    )
}

