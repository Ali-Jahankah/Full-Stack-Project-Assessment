import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import "../../styles/video.css";

const Video = ({ video }) => {
  const [like, setLike] = useState(0);
  return (
    <section className="video_section">
      <div className="video_cont">
        <iframe className="video" src={video.url} title={video.title}></iframe>
      </div>
      <div className="video_rate_cont">
        <dvi className="rate_div">
          <img src="/img/svg/like.svg" alt="like svg" />
        </dvi>
        <span>{like}</span>
        <div className="rate_div">
          <img src="/img/svg/dislike.svg" alt="dislike svg" />
        </div>
      </div>
      <div className="remove_cont">
        <button type="button" className="remove_btn">
          Remove
        </button>
      </div>
    </section>
  );
};

export default Video;
