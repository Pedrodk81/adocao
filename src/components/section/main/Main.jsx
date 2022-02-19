import React, { useEffect, useState  } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton'

import { getRandomBreadsImage, getBreedsCategory, getDogByBreed} from '../../../API/DogApi.jsx';

import './Main.css'

import banner2 from '../../tools/imagens/banner2.png'
import banner5 from '../../tools/imagens/banner5.jpg'
import banner6 from '../../tools/imagens/banner6.jpg'

import icone1 from '../../tools/imagens/icone_1.png'
import icone2 from '../../tools/imagens/icone_2.png'
import icone3 from '../../tools/imagens/icone_3.png'

export default function Main() {
    const [dogsImages, setDogsImages] = useState([]);
    const [breedsCategory, setBreedsCategory] = useState([]);
    const [breedsDogsImages, setBreedsDogsImages] = useState([]);
    const [activeCategory, setActiveCategory] = useState('affenpinscher');

    useEffect(() => {
        getRandomBreadsImage(loadDogImages);
        getBreedsCategory(loadBreedsCategory);
        getDogByBreed(activeCategory, loadBreedsDogsImages);
    }, []);

    const settingsBanner = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const settingsCategory = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
    };

    const loadDogImages = ({ message, status }) => {
        setDogsImages(message);
    }

    const loadBreedsCategory = ({ message, status }) => {
        setBreedsCategory(Object.keys(message));
    }

    const loadBreedsDogsImages = ({ message, status }) => {
        setBreedsDogsImages(message);
    }

    const setBreedActive = (breed, key) => {
        setActiveCategory(breed);
        getDogByBreed(breed, loadBreedsDogsImages);
    }
    // const getImagesByBreed
    return (
        <>
        <section id="ef-banner">
            <Slider {...settingsBanner}>
                <div>
                    <img src={banner2} alt="" />
                </div>
                <div>
                    <img src={banner5} alt="" />
                </div>
                <div> 
                    <img src={banner6} alt="" />
                </div> 
            </Slider>
        </section>
        <section id="ef-random-card">
            <div class="container">
                <h2>Muitos <b>cachorrinhos</b> procurando uma lar para chamar de seu!</h2>
                <div class="card-grid" >
                    {dogsImages.length > 0 && (dogsImages.map((image, key) => {
                        return (
                            <div class="card show" key={key}>
                                <img src={image} alt="Dog" />
                            </div>
                        )
                    }))}
                </div>
            </div>
        </section>
        <section id="ef-breeds-category">
            <div class="container">
                <h2>Navegue entre as categorias e escolha a <b>raça</b> que procura!</h2>
                <ul class="category">
                    <Slider {...settingsCategory}>
                        {breedsCategory.length > 0 && (breedsCategory.map((breed, key) => {
                            return ( activeCategory == breed 
                                ? 
                                <li>
                                    <a className="ef--btn--category active" >
                                        <span>
                                            {breed}
                                        </span>
                                    </a>
                                </li>
                                : 
                                <li>
                                    <a className="ef--btn--category" onClick={() => setBreedActive(breed, key)} >
                                        <span>
                                            {breed}
                                        </span>
                                    </a>
                                </li>
                            )
                        }))}
                    </Slider>
                </ul>
            </div>
            <div className="container">
                <div className="card-grid">
                    {breedsDogsImages.length > 0 && (breedsDogsImages.map((image, key) => {
                        return (
                            <div className="card" key={key}>
                                <img src={image} alt="Dog" />
                            </div>
                        )
                    }))}
                </div>
            </div>
        </section>
        <section id="ef-why-adopt">
            <div class="container">
                <h2>Por que <b>adotar</b> ?</h2>
                <div className="box-adopt">
                    <div className="card-adopt">
                        <img src={icone1} alt="Dog" />
                    </div>
                    <div className="card-adopt">
                        <img src={icone2} alt="Dog" />
                    </div>
                    <div className="card-adopt">
                        <img src={icone3} alt="Dog" />
                    </div>
                    <div className="card-text">
                        <span>
                            <b>Nesse exato momento, </b>
                            existem milhares de doguinhos e gatinhos esperando um humano para chamar de seu.
                        </span>
                        <div> . . .</div>
                        <span>
                            <b>E não há recompensa maior, </b>
                            do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho.
                        </span>
                        <div> . . .</div>
                        <span>
                            <b>E não há recompensa maior, </b>
                            do que vê-los se tornando aquela coisinha alegre e saudável depois de uma boa dose de cuidado e carinho.
                        </span>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
