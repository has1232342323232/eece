import React from "react";
import image from '../../../Assets/images/fatin_sir.jpg'
import { Link } from "react-router-dom";

const Individual = ({id, name, post, photoUrl}) => {

  const handleCardClick = (id) => {
    console.log('Clicked card ID:', id);
    // Do something with the card ID
  };

  if (!id) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="">
      <div className="card w-72 h-96 bg-base-100 shadow-xl hover:bg-hover-bg">
        <figure className="px-10 pt-10">
          <img 
            src={photoUrl}
            alt="Shoes"
            className="rounded-xl w-44 h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{post}</p>
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
