import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const [searchBtn, setSearchBtn] = useState(false);

  const removeVideoHandler = async (id) => {
    const deleteOpt = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `https://ali-jahankah-fullstack.glitch.me/api/deletevideo/${id}`,
        deleteOpt
      );
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };
  const addVideoHandler = () => {};
  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch(
          "https://ali-jahankah-fullstack.glitch.me/api/videos"
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
        addVideoHandler,
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
