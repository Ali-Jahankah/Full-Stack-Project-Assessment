import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
const NewVideo = () => {
  const { addVideoHandler } = useContext(UserContext);
  return (
    <article className="new_video">
      <form onSubmit={addVideoHandler}>
        <input type="text" value="" placeholder="Video URL" />
        <input type="text" placeholder="Video title" />
      </form>
    </article>
  );
};

export default NewVideo;
