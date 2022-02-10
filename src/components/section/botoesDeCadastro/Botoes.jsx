import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Botoes.css'



export default class Botoes extends Component {
    render() {
        return (
            <div className="login">
                <div className="intermediaria">
                    <Link  to="/login" >
                        <button className="buttons_nav" type="button" >
                            Entre
                        </button>
                    </Link >
                    <Link  to="/signup" >
                        <button className="buttons_nav" type="button" >
                            Cadastre-se
                        </button>
                    </Link >
                </div>

            </div>
        )
    }
}