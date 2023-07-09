import React from "react";
import HomeDiv from "../HomeDiv/HomeDiv";
import AdminPage from "../../Admin Page/AdminPage";
import FancyCarousel from "../FancyCarousel/FancyCarousel";
import MessageOfHead from "../../MessageOfHead/MessageOfHead";
import Gallery from "../Gallery/Gallery";
import ContactUs from "../../ContactUs/ContactUs";
import NewsAndNotice from "../../NewsAndNotice/NewsAndNotice";

const Home = () => {

  return (
    <div className='max-w-screen-sm max-w-screen-md max-w-screen-lg	max-w-screen-xl	max-w-screen-2xl	'>
      <br/>
      <HomeDiv></HomeDiv>
      <br/><br/>
      <FancyCarousel></FancyCarousel>
      <br/><br/><br/>
      <div className="divider text-2xl">Honorable Chairman</div>
      <MessageOfHead></MessageOfHead>
      <div className="divider text-2xl">Notice and News</div>
      <NewsAndNotice></NewsAndNotice>
      <br/><br/><br/>
      <div className="divider text-2xl">Important Dates</div>
      <AdminPage></AdminPage>
      <br/><br/><br/>
      <div className="divider text-2xl">See Our Memories</div>
      <Gallery></Gallery>
      <br/><br/><br/>
      <div className="divider text-2xl">For Any Help </div>
      <ContactUs></ContactUs>
      <br/><br/><br/>
      <div className="divider text-2xl"></div>
    </div>
  );
};

export default Home;
