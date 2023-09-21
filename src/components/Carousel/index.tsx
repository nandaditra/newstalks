import React from 'react'
import { CarouselArticle } from './CarouselArticle';

interface CarouselListProps {
    carousel: CarouselArticle[];
}

function Carousel({carousel}: CarouselListProps){
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            {carousel.splice(0,1).map((item)=> (
                <div className="carousel-inner my-5">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={item.urlToImage} className="d-block img-carousel" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-white">{item.title}</h5>
                            <p className="text-white">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carousel