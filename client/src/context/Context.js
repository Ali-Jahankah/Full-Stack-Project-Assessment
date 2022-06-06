import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [rate, setRate] = useState(0);
  const [searchBtn, setSearchBtn] = useState(false);

  const removeVideoHandler = (id) => {};
  useEffect(() => {
    const getOpt = {
      method: "GET",
      headers: {
        SameSite: "none",
        Secure: true,
      },
    };
    const getVideos = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/videos",
          getOpt
        );
        const videoData = await response.json();
        setData(videoData);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };
    data.length === 0 && getVideos();
  }, [setData]);
  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        rate,
        setRate,
        removeVideoHandler,
        searchBtn,
        setSearchBtn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
