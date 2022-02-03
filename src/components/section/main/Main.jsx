import React, { Component } from "react"
import './Main.css'

import Card from "../../tools/card/Card"
import img from '../../tools/imagens/d4c74593-3370-445d-9b99-16c95f891c3c.png'
import Banner from '../../tools/banner/Banner'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="img_highlight">
                    <img src={img} alt="" />
                </div>
                <div className="navigation_anchors">
                    <button className="custom_buttons">apadrinhe um bichinho</button>
                    <button className="custom_buttons">Colabore </button>
                    <button className="custom_buttons">Adote agora mesmo</button>
                </div>
                <div className="carousel_title">
                    <h1>Muitos cachorrinhos procurando uma lar para chamar de seu</h1>
                    <span className="title_description">
                        De uma olhada e tente não se apaixonar
                    </span>

                    <div className="carousel_dog">
                        <div className="carousel_organization">
                            <Card />
                        </div>
                    </div>
                    <div className="carousel_dog">
                        <div className="carousel_organization">
                            <Card />
                        </div>
                    </div>
                    <Banner />

                </div>

            </div>
        )
    }
}