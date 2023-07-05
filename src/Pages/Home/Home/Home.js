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
      <HomeDiv></HomeDiv>
      <br/><br/>
      <FancyCarousel></FancyCarousel>
      <br/><br/><br/>
      <MessageOfHead></MessageOfHead>
      <NewsAndNotice></NewsAndNotice>
      <br/><br/><br/>
      <AdminPage></AdminPage>
      <br/><br/><br/>
      <Gallery></Gallery>
      <br/><br/><br/>
      <ContactUs></ContactUs>
      <br/><br/><br/>
    </div>
  );
};

export default Home;
