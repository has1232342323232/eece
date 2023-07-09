import React from "react";
import NoticeBoard from "../NoticeBoard/NoticeBoard";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
const NewsAndNotice = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <NoticeBoard></NoticeBoard>
        <div>
          <NewsAndEvents></NewsAndEvents>
        </div>
      </div>
    </div>
  );
};

export default NewsAndNotice;
