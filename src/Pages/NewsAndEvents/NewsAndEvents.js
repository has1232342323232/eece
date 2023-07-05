import React, { useState, useEffect } from "react";
import "./NewsAndEvents.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const NewsAndEvents = () => {
  const notices = [
    { id: 1, title: "Important Announcement 1", date: "2023-06-23" },
    { id: 2, title: "Important Announcement 2", date: "2023-06-25" },
    { id: 3, title: "Important Announcement 3", date: "2023-06-27" },
    { id: 4, title: "Important Announcement 4", date: "2023-06-23" },
    { id: 5, title: "Important Announcement 5", date: "2023-06-25" },
    { id: 6, title: "Important Announcement 6", date: "2023-06-27" },
    // Add more notices as needed
  ];

  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prevIndex) =>
        prevIndex === notices.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Interval in milliseconds (5 seconds in this example)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [notices.length]);

  return (
    <div className="notice-board-container-main">
        <h1 className="text-xl/8 text-custom-pink">News and Events</h1>
      <div className="notice-board-container">
        <div className="notice-board">
          <ul className="notice-list">
            {notices.map((notice, index) => (
              <li
                key={notice.id}
                className={`notice ${
                  index === currentNoticeIndex ? "active" : ""
                }`}
              >
                <h3>{notice.title}</h3>
                <p>{notice.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <Link className="btn bg-custom-pink btn-sm m-2" to="/showAllNewsAndEvents">Show all</Link>
      </div>
    </div>
  );
};

export default NewsAndEvents;
