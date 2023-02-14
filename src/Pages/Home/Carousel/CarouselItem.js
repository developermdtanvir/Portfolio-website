import React from 'react';
import './Carousel.css';
export const CarouselItem = ({ item }) => {
    const { img, id, next, prev, title } = item;
    return (
        <div id={`slide${id}`} className=" carousel-gradient carousel-item relative w-full">
            <h1 className=' text-gray-500 w-1/2 px-10 my-auto text-3xl font-bold '>{title}</h1>
            <img src={img} alt='' className=" pl-10 pt-6 rounded-md h-80 " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}
