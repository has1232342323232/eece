import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowsTurnRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TeachersDetail = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teachers")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  const { id } = useParams();
  const card = cardData.find((item) => item._id === id);
  console.log(card);

  // Add conditional rendering check
  if (!card) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={card.photoUrl}
            className="rounded-lg shadow-2xl"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />

          <div>
            <h1 className="text-3xl font-bold ">{card.name}</h1>
            <h1 className="text-base  text-secondary">{card.degree}</h1> <br />
            <h1 className="text-2xl font-bold  text-primary">{card.post}</h1>
            <h2 className=" text-base">
              Department of Electrical, Electronic and Communication Engineering{" "}
              <br />
              Pabna University of Science and Technology <br />
              Pabna, Bangladesh
            </h2>
            <div className="divider text-2xl">Personal Information</div>
            <div className="py-6">
              <h1 className="text-custom-pink text-xl">Biography</h1>
              <p className="text-justify text-base">{card.biography}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
      <div className="divider text-2xl">Others Details</div>

        <h1 className="text-xl text-custom-pink">Contact Information</h1>
        <div>
          <FontAwesomeIcon
            icon={faPhone}
            beat
            size="lg"
            style={{ color: "#d03f01" }}
          />
          {card.mobile}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            bounce
            size="lg"
            style={{ color: "#02e812" }}
          />
          {card.email_office}
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            bounce
            size="lg"
            style={{ color: "#02e812" }}
          />
          {card.email_personal}
        </div>
        <br />
        <h2 className="text-primary">
          Total Publication: {card.total_publications}
        </h2>

        {card.education &&
          Array.isArray(card.education) &&
          card.education.length > 0 && (
            <div>
              <h2 className="text-2xl text-lime-500">
                Education{" "}
                <span className="text-secondary">
                  ({card.education.length})
                </span>
              </h2>
              <ul>
                {card.education.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowsTurnRight}
                      shake
                      size="lg"
                      style={{ color: "#ff0000" }}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <br />
            </div>
          )}

        {card.teaching_experience &&
          Array.isArray(card.teaching_experience) &&
          card.teaching_experience.length > 0 && (
            <div>
              <h2 className="text-2xl text-lime-500">
                Teaching Experience{" "}
                <span className="text-secondary">
                  ({card.teaching_experience.length})
                </span>
              </h2>
              <ul>
                {card.teaching_experience.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowsTurnRight}
                      shake
                      size="lg"
                      style={{ color: "#ff0000" }}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <br />
            </div>
          )}

        {card.research_interest &&
          Array.isArray(card.research_interest) &&
          card.research_interest.length > 0 && (
            <div>
              <h2 className="text-2xl text-lime-500">
                Research Interest{" "}
                <span className="text-secondary">
                  ({card.research_interest.length})
                </span>
              </h2>
              <ul>
                {card.research_interest.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowsTurnRight}
                      shake
                      size="lg"
                      style={{ color: "#ff0000" }}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <br />
            </div>
          )}

        {card.active_research_project &&
          Array.isArray(card.active_research_project) &&
          card.active_research_project.length > 0 && (
            <div>
              <h2 className="text-2xl text-lime-500">
                Active Research Project{" "}
                <span className="text-secondary">
                  ({card.active_research_project.length})
                </span>
              </h2>
              <ul>
                {card.active_research_project.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowsTurnRight}
                      shake
                      size="lg"
                      style={{ color: "#ff0000" }}
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <br />
            </div>
          )}
      </div>
    </div>
  );
};

export default TeachersDetail;
