import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export const MultiCarousel = () => {



    const [carouselData, setCarouselData] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setCarouselData(data));
    }, [])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                //deviceType={true}//{this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className='location-jobs '
            >

                {
                    carouselData.map((each) => {
                        return (
                            <div className="card w-96 glass">
                                <figure>
                                    <PhotoProvider speed={() => 800}
                                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                                        <PhotoView src={each.img}>
                                            <img src={each.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{each.title}</h2>
                                    <p>How to park your car at your garage?</p>
                                </div>
                            </div>

                        )
                    })
                }

            </Carousel>
        </div>
    );
}
