import React, {Component} from "react";
import Botoes from "../botoesDeCadastro/Botoes"
import './Nav.css'


export default class Nav extends Component{
    render(){
        return(
            <div className="navegacao">
                <div className="navigation_anchors">
                 <a href="/" className="ancoras" id="section1">Apadrinhe um bichinho</a> 
                 <a href="/" className="ancoras" id="section2">Colabore</a>
                 <a href="/" className="ancoras" id="section3">Quero Adotar</a> 
                 </div>
                 <Botoes/>
            </div>
        )
    }
}