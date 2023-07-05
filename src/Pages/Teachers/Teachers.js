import React from "react";
import Individual from "./Individuals/Individual";

const Teachers = () => {
  const cardData = [
    {
      _id: 1,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "image1.jpg",
    },
    {
      _id: 2,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "image2.jpg",
    },
    {
      _id: 3,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "image1.jpg",
    },
    {
      _id: 4,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "image2.jpg",
    },
    {
      _id: 5,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "image1.jpg",
    },
    {
      _id: 6,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "image2.jpg",
    },
    {
      _id: 7,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "image1.jpg",
    },
    {
      _id: 8,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "image2.jpg",
    },
    {
      _id: 9,
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "image1.jpg",
    },
    {
      _id: 10,
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "image2.jpg",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl p-4 text-center">Honorable Teachers</h1>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {cardData.map((card, index) => (
          <Individual
            id={card._id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
