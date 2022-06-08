import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Video from "./Video";
import "../../styles/videos.css";
const Videos = () => {
  const { data, setNewVideo } = useContext(UserContext);
  return (
    <article className="video_article">
      <button
        type="button"
        className="add_btn"
        onClick={() => setNewVideo(true)}
      >
        New Video
      </button>
      {data.map((v, index) => (
        <Video video={v} key={v.url + index}></Video>
      ))}
    </article>
  );
};
export default Videos;
