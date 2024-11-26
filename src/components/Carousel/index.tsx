import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "./index.css"

interface CarouselProps {
     carousel:any[],
     loading:boolean,
}

const Carousel = ({carousel, loading}:CarouselProps) => {
  console.log(carousel)
  
  if(loading) {
     return (
        <Skeleton className="skeleton-carousel" count={1}/> 
     )
  }
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel[0].urlToImage} className="d-block w-100" alt={carousel[0].title} />
          <div className="carousel-caption d-none d-md-block bg-black p-1">
            <h5>{carousel[0].title}</h5>
            <p>{carousel[0].description}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel[2].urlToImage} className="d-block w-100" alt={carousel[2].title} />
          <div className="carousel-caption d-none d-md-block bg-black p-1">
            <h5>{carousel[2].title}</h5>
            <p>{carousel[2].description}</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel
