import React from "react";
import chairmanSir from '../../Assets/images/saiful_sir.jpg';

const MessageOfHead = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center flex-col lg:flex-row-reverse">
        <div>
        <img
          src="https://i.ibb.co/dBr203P/saiful-sir.jpg"
          className="max-w-sm rounded-lg  shadow-2xl"
        alt=""/>
        <h1>Honorable Chairman</h1>
        </div>
        <div>
          <h1 className="text-3xl text-custom-pink">Message from the head of the Department</h1>
          <p className="py-6 text-justify">

          I want to express my gratitude for your dedication and commitment. Our faculty members continue to inspire through their expertise, and students, your pursuit of knowledge is commendable. Let us foster a culture of inclusivity, diversity, and respect, working together as a cohesive unit. Engage in research, conferences, and workshops, as they are vital for progress. Stay updated with departmental announcements and reach out for support when needed. Together, we can make a positive impact, striving for excellence and contributing to society. Thank you for being part of our department's journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageOfHead;
