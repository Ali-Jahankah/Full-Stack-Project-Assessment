import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "../../styles/video.css";
const Video = ({ video }) => {
  const { rate, setRate } = useContext(UserContext);
  return (
    <section className="video_section">
      <div className="video_cont">
        <iframe className="video" src={video.url} title={video.title}></iframe>
      </div>
      <div className="video_rate_cont">
        <span className="up_rate"></span>
        <span>{rate}</span>
        <span className="down_rate"></span>
      </div>
      <div className="remove_cont">
        <button type="button">Remove</button>
      </div>
    </section>
  );
};

export default Video;
