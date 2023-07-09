import React, { useState, useEffect } from "react";
import "./NoticeBoard.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const NoticeBoard = () => {


  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allNotice')
    .then(res => res.json())
    .then(data => {
        setNotices(data);
    })
  }, [])

  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNoticeIndex((prevIndex) =>
        prevIndex === notices.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Interval in milliseconds (5 seconds in this example)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [notices.length]);

  return (
    <div className="notice-board-container-main">
        <h1 className="text-xl/8 text-custom-pink">Notice Board</h1>
      <div className="notice-board-container">
        <div className="notice-board">
          <ul className="notice-list">
            {notices.map((notice, index) => (
              <li
                key={notice._id}
                className={`notice ${
                  index === currentNoticeIndex ? "active" : ""
                }`}
              >
                <h3>{notice.title}</h3>
                <p>{notice.date}</p>
                <div className="divider"></div>
              </li>
              
            ))}
          </ul>
        </div>
        <Link className="btn bg-custom-pink btn-sm m-2" to="/showAllNotices">Show all</Link>
      </div>
    </div>
  );
};

export default NoticeBoard;
