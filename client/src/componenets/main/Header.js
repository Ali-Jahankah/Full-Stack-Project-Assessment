import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import "../../styles/header.css";

const Header = () => {
  const { searchBtn, setSearchBtn, searchHandler } = useContext(UserContext);
  const [search, setSearch] = useState("");
  return (
    <header className="header">
      <nav className="header_nav">
        <div className="logo_div">
          <a href="https://github.com/Ali-Jahankah">
            <img src="/img/ali.png" alt="ali logo" />
          </a>
        </div>
        <div className="title_search_div">
          <h2 className="title">Video Recommendation</h2>
          {searchBtn && (
            <div className="search_cont">
              <input
                type="text"
                placeholder="video..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                className="search_btn"
                onClick={() => {
                  searchHandler(search);
                }}
              >
                Search
              </span>
            </div>
          )}
        </div>

        <div className="search_btn_div">
          <img
            src="/img/svg/search.svg"
            alt="search svg"
            className="search_svg"
            onClick={() => setSearchBtn(!searchBtn)}
          />
        </div>
      </nav>
      <div className="wave_div">
        <img src="/img/svg/wave.svg" alt="wave svg" />
      </div>
    </header>
  );
};

export default Header;
