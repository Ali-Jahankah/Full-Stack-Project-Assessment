import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import NewVideo from "../general/NewVideo";
import Videos from "../general/Videos";
import PreLoader from "./PreLoader";
const Main = () => {
  const { preloader, newVideo } = useContext(UserContext);
  return (
    <>
      <Videos></Videos>

      {preloader && <PreLoader></PreLoader>}
      {newVideo && <NewVideo></NewVideo>}
    </>
  );
};

export default Main;
