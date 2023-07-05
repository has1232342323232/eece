import React from 'react';
import { useParams } from 'react-router-dom';

const TeachersDetail = () => {

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


    const {id} = useParams();
    // const card = cardData.find((card) => )
    const card = cardData.find((card) => card._id === parseInt(id));
    return (
        <div>
            <h1>Teachers Details</h1>
            <h1>Id: {card._id}</h1>
            <h1>Title:{card.title}</h1>
            <h1>{card._description}</h1>
        </div>
    );
};

export default TeachersDetail;