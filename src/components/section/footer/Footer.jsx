import React, { Component } from "react"
import './Footer.css'
import imagem1 from '../../tools/imagens/instagram.png'
import imagem2 from '../../tools/imagens/github.png'
import imagem3 from '../../tools/imagens/dog-api-logo.svg'
import imagem4 from '../../tools/imagens/flaticon.svg'
import imagem5 from '../../tools/imagens/amigonaosecompra.png'

export default class Footer extends Component {
    render() {
        return (
            <footer id="ef-footer">
                <div className="container">
                    <div className="social">
                        <span className="title">
                            Minhas mídias pessoais:
                        </span>
                        <ul>
                            <li>
                                <a href="https://github.com/Pedrodk81" title="Github" target="_blank">
                                    <img src={imagem2} alt="Github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/pedroduke1998/" title="Instagram" target="_blank">
                                    <img src={imagem1} alt="Instagram" /> 
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="cp-libs">
                        <span className="title">
                            Referências externas usadas no site:
                        </span>
                        <ul>
                            <li>
                                <a href="https://dog.ceo/dog-api/" title="Dogs API" target="_blank">
                                    <img src={imagem3} alt="Dogs API" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.flaticon.com/br/" title="FlatIcon" target="_blank">
                                    <img src={imagem4} alt="FlatIcon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.amigonaosecompra.com.br/" title="Amigos não se compra" target="_blank">
                                    <img src={imagem5} alt="Amigos não se compra" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}