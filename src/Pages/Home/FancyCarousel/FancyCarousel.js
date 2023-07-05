import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image2 from '../../../Assets/images/2.jpg';
import image3 from '../../../Assets/images/pust lake.jpg';
import image4 from '../../../Assets/images/chair.png';
import './FancyCarosel.css'



const FancyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const carouselItems = [
    { title: 'Title 1', image: image2 },
    { title: 'Title 2', image: image3 },
    { title: 'Title 3', image: image3 },
  ];

  return (
    <Slider {...settings}>
      {carouselItems.map((item, index) => (
        <div className='forAlignment' key={index}>
          <img src={item.image} alt={`Carousel Image ${index + 1}`} />
          <h3 >{item.title}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default FancyCarousel;
