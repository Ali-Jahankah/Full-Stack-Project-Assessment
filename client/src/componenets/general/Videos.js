import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Video from "./Video";
import "../../styles/videos.css";
const Videos = () => {
  const { data } = useContext(UserContext);
  return (
    <article className="video_article">
      {data.map((v) => (
        <Video video={v} key={v.url}></Video>
      ))}
    </article>
  );
};
export default Videos;
