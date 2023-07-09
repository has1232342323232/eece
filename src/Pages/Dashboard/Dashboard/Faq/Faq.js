import React from "react";

const Faq = () => {
  return (
    <div className="p-10">
      <h1 className="text-custom-pink text-center text-3xl p-8">Frequently Asked Questions</h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Where is the Dept. of EECE is located?
        </div>
        <div className="collapse-content">
          <p>The Department of Electrical, Electronic and Communication Engineering(EECE) of PUST located in the third flour of Engineering Building of Md Wazed Mia Science Building</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How does the lab facility of the department? 
        </div>
        <div className="collapse-content">
          <p>Lab facility is comparatively good. Our Department has tow lab Once is Computer lab and Other is Electronic lab</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Tell me about the Department's study environment?
        </div>
        <div className="collapse-content">
          <p>Department of EECE is one of the largest and leading departments in PUST. The department strives to be at the forefront of electrical, electronic and communication engineering education, research and innovation to address national and global challenges.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is the decision of the admission of this university is good me?
        </div>
        <div className="collapse-content">
          <p>As your wish.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
