import React from "react";

const InboxIndividual = ({name, email, message, no}) => {
  return (
    <div className="card bg-base-100 shadow-xl ">
      <div className="card-body">
        <h3>Message no: {no+1}</h3>
        <h2 className="card-title">Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p>Message: {message}</p>
      </div>
    </div>
  );
};

export default InboxIndividual;
