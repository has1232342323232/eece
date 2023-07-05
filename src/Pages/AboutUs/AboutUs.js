import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="">
      <div className="aboutUs h-96"></div>
      <div className="p-4">
        <br />
        <h1 className="text-4xl">Mission and Vision</h1>
        <p className="text-justify">
          Our mission is to provide a dynamic learning environment that fosters
          excellence in Electrical, Electronic, and Communication Engineering
          education. We are committed to equipping our students with the
          necessary knowledge, skills, and professional ethics to become
          competent engineers and leaders in their respective fields. Through
          rigorous academic programs, hands-on practical training, and industry
          collaborations, we aim to develop a solid foundation in theoretical
          concepts and practical applications. We strive to cultivate a passion
          for lifelong learning, research, and innovation, while promoting
          social responsibility and ethical practices. Our mission is to
          contribute to the advancement of technology and society by producing
          well-rounded engineers capable of addressing the emerging challenges
          of the ever-evolving electrical, electronic, and communication
          sectors.
        </p>
        <br />
        <p className="text-justify">
          Our vision is to be recognized as a leading Electrical, Electronic,
          and Communication Engineering department globally, renowned for
          academic excellence, cutting-edge research, and technological
          innovation. We envision a department that nurtures a culture of
          creativity, critical thinking, and interdisciplinary collaboration
          among faculty, students, and industry partners. Our graduates will be
          highly sought-after professionals who make significant contributions
          to industry, academia, and society. We aim to be at the forefront of
          technological advancements, continuously adapting our curriculum and
          research focus to align with emerging trends and industry demands.
          Through strategic partnerships with renowned institutions and industry
          leaders, we envision being a hub of innovation, driving technological
          breakthroughs and fostering entrepreneurship. Our department will be
          known for its commitment to excellence, inclusivity, and societal
          impact, creating a positive influence in the field of Electrical,
          Electronic, and Communication Engineering.
        </p>
<br/><br/>
        <div className="flex justify-center">
          <div>
            <h1 className="text-4xl text-center">Department at a Glance</h1><br/>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Teacher</div>
                <div className="stat-value">10</div>
                <div className="stat-desc">On Study Leave :2</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Students</div>
                <div className="stat-value">230</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Officers</div>
                <div className="stat-value">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
