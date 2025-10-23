import React from "react";
import Banner from "../components/Banner";
import Discover from "../components/Discover";
import Different from "../components/Different";
import Enjoy from "../components/Enjoy";
import Chance from "../components/Chance";
import Feedback from "../components/Feedback";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <>
      <Banner />
      <Discover/>
      <Enjoy/>
      <Different/>
      <Chance/>
      <Feedback/>
      <Subscribe/>
    </>
  );
};

export default Home;
