import React from "react";


const HomeDiv = () => {
  return (
    <div className="hero pt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src='https://i.ibb.co/JQtBjdq/pust-lake.jpg' className="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-3xl text-custom-pink">Welcome to the dept. of EECE, PUST Website</h1>
          <p className="py-6 text-justify">
          Department of EECE is one of the largest and leading departments in PUST. The department strives to be at the forefront of electrical, electronic and communication engineering education, research and innovation to address national and global challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDiv;
