import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import "../../styles/newvideo.css";
const NewVideo = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const { addVideoHandler, setNewVideo } = useContext(UserContext);
  return (
    <article className="new_video_cont">
      <h2>New Video Details:</h2>
      <form
        onSubmit={(e) => {
          if (title.length > 0 && rating > 0 && url.length > 0) {
            e.preventDefault();
            addVideoHandler({ title, rating, url });
          } else {
            e.preventDefault();
            alert("Please fill the fields");
          }
        }}
      >
        <input
          type="text"
          value={url}
          placeholder="URL without https:// "
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Video title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={rating}
          placeholder="Rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
        <button type="submit" className="submit_btn">
          Submit
        </button>
        <button
          type="button"
          className="submit_btn cancel_btn"
          onClick={() => setNewVideo(false)}
        >
          cancel
        </button>
      </form>
    </article>
  );
};

export default NewVideo;
