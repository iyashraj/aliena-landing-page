import "./reviewcard.css";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import img from "../../assets/userpic.jpeg";

const ReviewCard = () => {
  return (
    <div className="reviewcard-main">
      <img src={img} alt="img" className="client-pic" />
      <div style={{ width: "300px", height: "400px" }}>
        <div className="review-stars">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
        </div>
        <p className="review-thoughts">
          "We love ALIENA! Our designers were using it for their projects, so we
          already knew what kind of design they want."
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
            color: "gray",
          }}
        >
          <p className="client-name"> Jenny Wilson</p>
          <p className="client-sitename">Grower.io</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
