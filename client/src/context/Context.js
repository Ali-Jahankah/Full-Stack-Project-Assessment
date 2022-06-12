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
    setPreloader(true);

    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = info.url.match(regExp);
    if (info.url.slice(0, 24) !== "https://www.youtube.com/" || !match) {
      setPreloader(false);
      return alert(
        "Please enter a valid url :)\n EX: https://www.youtube.com/..."
      );
    }

    info.url = `https://youtube.com/embed/${match[2]}`;

    const newVideoData = info;
    const postOpt = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVideoData),
    };
    try {
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
          "https://ali-jahankah-fullstack.glitch.me/api/videos"
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
  }, []);
  const sorting = () => setData([...data].sort((a, b) => a.rating - b.rating));

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
        sorting,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
