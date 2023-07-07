import React from "react";
import "./ContactUs.css";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const contactMessage = {
      name: name,
      email: email,
      message: message,
    };
    console.log(contactMessage);

    fetch("http://localhost:5000/messageCollection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contactMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Message sent successful");
        }
      });
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>Fill out the form below to get in touch with us.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
