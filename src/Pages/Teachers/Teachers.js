import React, { useEffect } from "react";
import Individual from "./Individuals/Individual";
import { useState } from "react";

const Teachers = () => {
 

const [cardData, setCardData] = useState([]);
  useEffect(() =>{
       fetch('http://localhost:5000/teachers')
       .then(res => res.json())
       .then(data => {
        setCardData(data)
       })
  }, [])
  if (!cardData[0]) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-3xl p-4 text-center">Honorable Teachers</h1>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {cardData.map((card, index) => (
          <Individual
            id={card._id}
            key={index}
            name={card.name}
            photoUrl={card.photoUrl}
            post={card.post}
          />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
