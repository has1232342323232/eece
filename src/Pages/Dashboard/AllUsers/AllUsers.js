import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import InboxIndividual from "../Inbox/InboxIndividual";
import { toast } from "react-hot-toast";
import IndividualUser from "./IndividualUser/IndividualUser";

const AllUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://eece-server.vercel.app/allRegisterUsers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        toast.success('Data Loaded Successful')
      });
  }, []);

  if (!data[0]) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div>
        <h1 className="text-3xl text-center p-4">All registered Users</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        {data.map((card, index) => (
          <IndividualUser
            key={index}
            id={card._id}
            data={card}
            no={index}
            name={card.name}
            user_email={card.email}
          ></IndividualUser>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
