import React from "react";
import "./home.css";
import HeroSection from "./herosection/HeroSection";
import Story from "./story/Story";
import WorkDetails from "./work-details/workDetails";
import ClientReview from "./client-review/clientReview";
import Footer from "./footer/footer";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Story />
      <WorkDetails />
      <ClientReview />
      <Footer />
    </div>
  );
};

export default Home;
