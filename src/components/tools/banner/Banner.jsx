import React, { Component } from "react";
import './Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="principal">

                <div id="section1" className="apadrinhar">
                    <div className="title_banner"><span><h2>Apadrinhe um bichinho</h2></span></div>
                    <div className="banner_content">
                    <span>
                        Você auxilia financeiramente com um valor mensal para os cuidados
                        e necessidades de um bichinho a sua escolhido até que ele seja adotado por uma família,
                        e se torna padrinho ou madrinha dele ou dela durante este período. Tem interesse em apadrinhar?
                        <a href="/"> Clique aqui para mais informações</a><a href="#section1"></a>
                    </span>
                    </div>
                </div>
                <div  id="section2" className="divulgue">
                    <div className="title_banner"><span><h2>Divulgue um bichinho</h2></span></div>
                    <div className="banner_content">
                        <span>
                            Não pode adotar e também não tem condições de  ser um apadrinho?
                            Você ainda pode colaborar para que eles encontrem um lar!
                            Basta curtir e acompanhar o nossas atualizações diárias no Facebook e Instagram e nos ajudar a divulgar interagindo e compartilhando as publicações daqueles que ainda aguardam pela adoção.
                            É simples, rápido e não custa nada 
                        </span>
                    </div>
                </div>
                <div id="section3" className="adocao">
                    <div className="title_banner"><span><h2>Adote um bichinho</h2></span></div>
                    <div className="banner_content">
                        <span>
                            Adotar um animal é tudo de bom! Carinhosos,
                            fofos e com muito amor para dar,
                            alem disso são companheiros maravilhosos e amigos muitos fiéis.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}