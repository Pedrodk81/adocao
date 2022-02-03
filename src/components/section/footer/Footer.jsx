import React, { Component } from "react"
import './Footer.css'
import imagem1 from '../../tools/imagens/instagram.png'
import imagem2 from '../../tools/imagens/github.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="credit">

                    <div className="errands">
                        <span>
                            Esse site tem intuito académico, não tendo animais reais em seu cadastro
                        </span>
                        <span>
                            todas as imagens são propriedade de seus respective donos
                        </span>
                    </div>
                    <div className="contact">
                        <a href="/"><img src={imagem1} alt="" /> Instagram</a>
                    <a href="/"><img src={imagem2} alt="" /> GitHub</a>
                    </div>
                </div>
            </div>
        )
    }
}