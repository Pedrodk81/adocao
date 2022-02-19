import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Botoes.css'



export default class Botoes extends Component {
    render() {
        return (
            <div className="login">
                <Link className="ef-btn" to="/signup" >
                    <span>
                        Cadastrar
                    </span>
                </Link >
                <Link className="ef-btn--enter" to="/login" >
                    <span>
                        Entrar
                    </span>
                </Link >
            </div>
        )
    }
}