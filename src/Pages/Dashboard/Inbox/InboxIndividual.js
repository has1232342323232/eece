import React from "react";

const InboxIndividual = ({name, email, message=NaN, no}) => {

    if (message===0) {
        
    }
  return (
    <div className="card bg-base-100 shadow-xl border-red-600">
      <div className="card-body">
        <h3>Serial No: {no+1}</h3>
        <h2 className="card-title">Name: {name}</h2>
        <h3>Email: {email}</h3>
        <p >Message: {message}</p>
      </div>
    </div>
  );
};

export default InboxIndividual;
