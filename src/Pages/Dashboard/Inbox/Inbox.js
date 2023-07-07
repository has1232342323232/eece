import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import InboxIndividual from "./InboxIndividual";

const Inbox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/messageCollection")
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

  return(
      <div className="grid grid-cols-2 gap-4">
        {
            data.map((card, index) => (
                <InboxIndividual 
                key={index}
                no={index}
                name={card.name}
                email={card.email}
                message={card.message}
               >
               </InboxIndividual>
            ))
        }
      </div>
  );
};

export default Inbox;
