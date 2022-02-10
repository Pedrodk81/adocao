import React, {Component} from "react"
import './Logo.css'
import img from '../../tools/imagens/ff1491d605c4dd2d6b7d9e572ae03322.jpg'
import Botoes from "../botoesDeCadastro/Botoes"
import { Link } from "react-router-dom";

export default class Logo extends Component{
    render(){
        return(
            <aside className="logo">
                <Link to="/" className="logo">
                  <img src={img} alt="logo-do-site" />
                </Link>
                <div className="navegacao">
                <div className="navigation_anchors">
                    <a href="#section1" className="ancoras">Apadrinhe um bichinho</a> 
                    <a href="#section2" className="ancoras">Colabore</a>
                    <a href="#section3" className="ancoras" id="section3">Quero Adotar</a> 
                    </div>
                    <Botoes/>
                </div>
            </aside>
        )
    }

}