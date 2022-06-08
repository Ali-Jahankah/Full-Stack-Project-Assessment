import React from "react";
import "../../styles/preloader.css";
const PreLoader = () => {
  return (
    <article className="preloader_cont">
      <img src="/img/svg/skull.svg" alt="skull svg"></img>
      <h2>Loading...</h2>
    </article>
  );
};

export default PreLoader;
