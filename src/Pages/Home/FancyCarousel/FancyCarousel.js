import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    { title: 'PUST Lake', image: 'https://i.ibb.co/JQtBjdq/pust-lake.jpg' },
    { title: 'Front View', image: 'https://i.ibb.co/WnH4dtP/2.jpg' },
    { title: 'PUST Lake', image: 'https://i.ibb.co/JQtBjdq/pust-lake.jpg' },
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
