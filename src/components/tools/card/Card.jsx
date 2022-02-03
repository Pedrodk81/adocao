import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Card.css'
import { getRandomBreadsImage } from '../../../API/DogApi.jsx';


export default class Card extends Component {
    state = {
        dogImages: []
    };

    loadDogImages = ({ message, status }) => {
        console.log(message)
        this.setState({ dogImages: message });
    }

    componentDidMount = () => {
        getRandomBreadsImage(this.loadDogImages)
    }

    render() {
        const { dogImages } = this.state;

        return (
            // <Carousel>
            <>
            <div className="card-box">
                {dogImages.length > 0 && (
                    dogImages.map((image, key) => {
                        return (
                            <div key={key} className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src={image} alt="Adote" />
                                        
                                    </div>
                                    <div className="flip-box-back">
                                        <span>se interessou por esse?</span>
                                        <button className="custom_buttons">click aqui para saber mais </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            <div className="search_button">
                <button className="custom_buttons" onClick={() => getRandomBreadsImage(this.loadDogImages)}>Ver mais </button>
            </div>
            </>
        )
    }
}