import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Video from "./Video";
import "../../styles/videos.css";
const Videos = () => {
  const { data, setNewVideo, sorting } = useContext(UserContext);
  return (
    <article className="video_article">
      <button
        type="button"
        className="add_btn"
        onClick={() => setNewVideo(true)}
      >
        New Video
      </button>
      <div className="filter_div">
        <div className="sort_filter_div">
          <span>Sort by Rating</span>
          <img
            className="sort_svg"
            src="/img/svg/sort.svg"
            alt="sort svg"
            onClick={sorting}
          />
        </div>
      </div>
      {data.length !== 0 ? (
        data.map((v, index) => <Video video={v} key={v.url + index}></Video>)
      ) : (
        <div style={{ height: "80vh", textAlign: "center" }}>
          <h1>There is nothing to show! :(</h1>
        </div>
      )}
    </article>
  );
};
export default Videos;
