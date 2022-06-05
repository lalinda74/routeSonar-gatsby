import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

// const colors = [Slider1, Slider2];

const ImageSlider = () => {

    return (
        <section className="rs-slider">
            <div className="rs-slider__wrapper">
                <StaticImage src='../../../images/slider1.svg' alt="image desc" className="rs-slider__slide" />
            </div>
        </section>
    )
}

export default ImageSlider;