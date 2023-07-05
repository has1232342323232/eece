import React from "react";
import image from '../../../Assets/images/fatin_sir.jpg'
import { Link } from "react-router-dom";

const Individual = ({id, title, description}) => {

  const handleCardClick = (id) => {
    console.log('Clicked card ID:', id);
    // Do something with the card ID
  };
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl hover:bg-hover-bg">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <Link  to={`/faculty-profile/${id}`} className="btn bg-custom-pink hover:bg-hover-color">
            
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
