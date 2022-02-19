import React, {Component} from "react"
import './Logo.css'
import img from '../../tools/imagens/ff1491d605c4dd2d6b7d9e572ae03322.jpg'
import Botoes from "../botoesDeCadastro/Botoes"
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(){
        return(
            <nav id="ef-nav">
                <div className="container">
                    <div class="navbar">
                        <Link to="/" className="logo">
                            <img src={img} alt="logo-do-site" />
                        </Link>
                        <div className="navegacao">
                            <ul>
                                <li>
                                    <a href="#section1" className="ancoras">
                                        <span class="nav-item">Apadrinhe um bichinho</span>
                                    </a> 
                                </li>
                                <li>
                                    <a href="#section2" className="ancoras">
                                    <span class="nav-item">Colabore
                                    </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#section3" className="ancoras" id="section3"><span class="nav-item">Quero Adotar</span></a> 
                                </li>
                            </ul>
                            <Botoes/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}