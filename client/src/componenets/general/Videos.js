import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Video from "./Video";
const Videos = () => {
  const { data } = useContext(UserContext);
  return (
    <article>
      {data.map((v) => (
        <Video video={v} key={v.url}></Video>
      ))}
    </article>
  );
};

export default Videos;
