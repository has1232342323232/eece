import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import InboxIndividual from "./InboxIndividual";

const Inbox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://eece-server.vercel.app/messageCollection")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        toast.success("Data Loaded successful");
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
        <h1 className="text-center text-3xl p-4">All Contact Us Messages</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        {data.map((card, index) => (
          <InboxIndividual
            key={index}
            no={index}
            name={card.name}
            email={card.email}
            message={card.message}
          ></InboxIndividual>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
