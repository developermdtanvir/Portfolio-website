import React from 'react'
import image from '../../../assets/carousel/carousel-1.webp'
import { LikeButton } from '../../LikeButton/LikeButton'

export const Home = () => {
    const images = [
        {
            id: 1,
            images: image
        },
        {
            id: 2,
            images: image
        },
        {
            id: 3,
            images: image
        },
        {
            id: 4,
            images: image
        }
    ]
    return (
        <div>
            <div>
                {
                    images.map(image => <div className='w-[800px] my-20 '>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={image.images} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <LikeButton />
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}
