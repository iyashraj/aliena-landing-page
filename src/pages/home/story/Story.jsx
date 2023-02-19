import { useState } from "react";
import "./story.css";
import user_pic from "../../../assets/userpic.jpeg";
import sideImage from "../../../assets/side-image.png";

const Story = () => {
  const [selectedBtn, setSelectedBtn] = useState("overview");
  const buttonSelector = (buttonValue) => {
    if (buttonValue === "overview") {
      setSelectedBtn("overview");
    } else if (buttonValue === "founder") {
      setSelectedBtn("founder");
    } else if (buttonValue === "mission") {
      setSelectedBtn("mission");
    }
  };
  return (
    <>
      <div className="story-main">
        <div className="story-title">
          our story <hr className="divider" />
        </div>
        <div className="main-content-wrapper">
          <div className="active-content-wrapper">
            <div className="active-btns">
              <p
                onClick={() => buttonSelector("overview")}
                className={selectedBtn === "overview" && "active-selector-btn"}
              >
                Overview
              </p>
              <p
                onClick={() => buttonSelector("founder")}
                className={selectedBtn === "founder" && "active-selector-btn"}
              >
                Founder
              </p>
              <p
                onClick={() => buttonSelector("mission")}
                className={selectedBtn === "mission" && "active-selector-btn"}
              >
                Mission
              </p>
            </div>
            {selectedBtn === "overview" && (
              <div className="active-content-overview">
                <p>
                  Aliena is an innovative web solution, which combines
                  captivating design and flawless functionality in a
                  multipurpose HTML template.
                </p>
                <span>
                  Made to be used by anyone who is looking for a stunning
                  multifunctional website, this template is a universal
                  solution, which can be used already after being installed. It
                  differs from other similar projects in everything - be it the
                  initial concept or the final look. Aliena also can boast the
                  set of powerful features that can be used by anyone without
                  being afraid to overload their site.
                </span>
              </div>
            )}
            {selectedBtn === "founder" && (
              <div className="active-content-founder">
                <img src={user_pic} alt="founder" className="founder-left" />
                <div className="founder-right">
                  <p>Yashraj Thakur</p>
                  <span className="founder-title">Founder</span>
                  <span className="founder-bio">
                    Yash is the main person behind Aliena. He is the
                    multitalented manager and a Front-end Developer who is a
                    true mine of creative ideas for everyone at our team.
                  </span>
                </div>
              </div>
            )}
            {selectedBtn === "mission" && (
              <div className="active-content-mission">
                <p className="first-info">
                  In the digital age, we are marketing ourselves on the web.
                  That is why we aim to make it as easy and affordable for
                  everyone to take charge of their web presence. Words like
                  tweet and yelp should be part of your marketing campaign, and
                  not part of your stress.
                </p>
                <span>
                  We strive to create a memorable web image for everyone.
                </span>
                <p className="second-info">
                  We establish a relationship with all of our clients, and we
                  feel it is our responsibility to help them grow and harness
                  the opportunity of their presence on the Internet.
                </p>
              </div>
            )}
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
          <img src={sideImage} alt="side-img" className="side-image"/>
        </div>
      </div>
    </>
  );
};

export default Story;
