import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import 'react-loading-skeleton/dist/skeleton.css'

import './App.css'

import Nav from '../section/logo/Logo'
import Main from '../section/main/Main'
import Footer from '../section/footer/Footer'
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
            console.log('pathnameasdasdsa', pathname)
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
                <Nav />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<Register />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

