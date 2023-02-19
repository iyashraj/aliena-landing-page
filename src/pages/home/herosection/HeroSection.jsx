import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./herosection.css";

const HeroSection = () => {
  const navigate = useNavigate()
  const [data1, setData1] = useState({
    firstHeading:
      "Make your website look stunning with several dozen features of Aliena",
    mainHeading: "we design",
    secondHeading: "Save time with our newest HTML template",
    btn1Text: "Start a Journey",
    btn3Text: "VIEW ADVANTAGES",
  });
  const [isAnimActive, setIsAnimActive] = useState(false);
  const data = [
    {
      firstHeading:
        "Make your website look stunning with several dozen features of Aliena",
      mainHeading: "we design",
      secondHeading: "Save time with our newest HTML template",
      btn1Text: "Start a Journey",
      btn3Text: "VIEW ADVANTAGES",
    },
    {
      firstHeading: "Make the Right Choice with Aliena",
      mainHeading: "we develop",
      secondHeading: "Universal Multipurpose HTML Template",
      btn1Text: "Start a Journey",
      btn3Text: "VIEW ADVANTAGES",
    },
    {
      firstHeading:
        "Change the impression of your website visitors with our template",
      mainHeading: "we deploy",
      secondHeading: "Become the leader of the web with Aliena",
      btn1Text: "Start a Journey",
      btn3Text: "VIEW ADVANTAGES",
    },
  ];

  const [index, setindex] = useState(1);
  useEffect(() => {
    setIsAnimActive(true);
    setTimeout(() => {
      setIsAnimActive(false);
    }, 1200);
  }, []);

  useEffect(() => {
    if (index > 2) {
      setindex(0);
    }

    const interval = setInterval(() => {
      setIsAnimActive(true);
      setData1(data[index]);
      setindex(index + 1);
      setTimeout(() => {
        setIsAnimActive(false);
      }, 1200);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  const actionHandler = () => {
    navigate('/login')
  }
  return (
    <div className="carousel-container">
      <div className="home-main">
        <div
          className={isAnimActive ? "firstHeading activeAnims" : "firstHeading"}
        >
          {data1?.firstHeading}
        </div>
        <div className={isAnimActive ? "mainHeadingWrapper activeAnims" : "mainHeadingWrapper"}>
          <div className="empty-square"></div>
          <div
            className={isAnimActive ? "mainHeading activeAnims" : "mainHeading"}
          >
            {data1?.mainHeading}
          </div>
          <div className="empty-square"></div>
        </div>
        <div
          className={
            isAnimActive ? "secondHeading activeAnims" : "secondHeading"
          }
        >
          {data1?.secondHeading}
        </div>
        <div
          className={isAnimActive ? "btnsWrapper activeAnims" : "btnsWrapper"}
        >
          <button id="btn1" onClick={actionHandler}>Start a Journey</button>
          <button id="btn2">VIEW ADVANTAGES</button>
        </div>
      </div>
      <div className="wave-container"></div>
    </div>
  );
};

export default HeroSection;
