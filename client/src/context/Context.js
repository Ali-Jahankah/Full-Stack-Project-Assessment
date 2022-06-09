import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const [searchBtn, setSearchBtn] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [newVideo, setNewVideo] = useState(false);
  const removeVideoHandler = async (id) => {
    const deleteOpt = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      setPreloader(true);
      const response = await fetch(
        `https://ali-jahankah-fullstack.glitch.me/api/deletevideo/${id}`,
        deleteOpt
      );
      const newData = await response.json();
      setData(newData);
      setPreloader(false);
    } catch (error) {
      console.log(error);
      setPreloader(false);
    }
  };
  const addVideoHandler = async (info) => {
    setNewVideo(false);
    const newVideoData = info;
    const postOpt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVideoData),
    };
    try {
      setPreloader(true);
      const response = await fetch(
        "https://ali-jahankah-fullstack.glitch.me/api/addvideo",
        postOpt
      );
      const newData = await response.json();
      setData(newData);
      setPreloader(false);
    } catch (error) {
      console.log(error);
      setPreloader(false);
    }
  };
  const searchHandler = async (word) => {
    try {
      setPreloader(true);
      const response = await fetch(
        `https://ali-jahankah-fullstack.glitch.me/api/searchvideos?search=${word}`
      );
      const newData = await response.json();
      newData.message ? alert(newData.message) : setData(newData);
      setPreloader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getVideos = async () => {
      try {
        setPreloader(true);
        const response = await fetch(
          "http://ali-jahankah-fullstack.glitch.me/api/videos"
        );
        const videoData = await response.json();
        setData(videoData);
        setPreloader(false);
      } catch (error) {
        console.log(error);
        setPreloader(false);
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
        preloader,
        setPreloader,
        newVideo,
        setNewVideo,
        searchHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
