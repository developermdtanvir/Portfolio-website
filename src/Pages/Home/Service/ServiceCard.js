import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
    const { img, title, description, _id, price } = service;
    const shortDescription = description.slice(100);
    console.log(shortDescription);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl hover:border border-green-600 cursor-pointer">
            <figure className=' p-10'>
                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <p>{title}</p>
                <div className="card-actions justify-end">
                    <span>{shortDescription}...</span>

                    <h1>Price:{price}</h1>
                </div>
                <Link to={`/services/${_id}`}><button className=' btn btn-success'>Details</button></Link>
            </div>
        </div>
    )
}
