import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import "../../styles/video.css";

const Video = ({ video }) => {
  if (!video.url.includes("https")) {
    video.url = `https://${video.url}`;
  }
  const { removeVideoHandler } = useContext(UserContext);
  const [like, setLike] = useState(0);
  return (
    <section className="video_section">
      <div className="video_cont">
        <iframe className="video" src={video.url} title={video.title}></iframe>
      </div>
      <div
        className={`video_rate_cont ${
          like < 0 ? "back_red" : like < 4 ? "back_yellow" : "back_green"
        } `}
      >
        <div className="rate_div">
          <img
            src="/img/svg/like.svg"
            alt="like svg"
            onClick={() => setLike(like + 1)}
          />
        </div>
        <span>{like}</span>
        <div className="rate_div">
          <img
            src="/img/svg/dislike.svg"
            alt="dislike svg"
            onClick={() => setLike(like - 1)}
          />
        </div>
      </div>
      <div className="rating_title_div">
        <h3 className="video_title">
          <b>Title:</b> <span>{video.title}</span>
        </h3>
        <h6 className="video_rating">
          Rating: <span>{video.rating}</span>
        </h6>
      </div>

      <div className="remove_cont">
        <button
          type="button"
          onClick={() => removeVideoHandler(video.id)}
          className="remove_btn"
        >
          Remove
        </button>
      </div>
    </section>
  );
};

export default Video;
