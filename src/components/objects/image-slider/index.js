import React, {useState, useEffect} from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Slider1 from '../../../images/slider1.svg';
import Slider2 from '../../../images/slider2.svg';

const colors = [Slider1, Slider2];

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const delay = 5000;

    useEffect(() => {
        setTimeout(() => 
            setIndex((prevIndex) => 
                prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
        return () => { setIndex(0) };
    }, [index]);

    return (
        <section className="rs-slider">
            <div className="rs-slider__wrapper" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                {/* {
                    colors.map((image, index) => (
                        <img className="rs-slider__slide" key={index} src={image} alt={image} />
                    ))
                } */}
                <StaticImage src='../../../images/slider1.svg' alt="image desc" className="rs-slider__slide" />
            </div>
        </section>
    )
}

export default ImageSlider;