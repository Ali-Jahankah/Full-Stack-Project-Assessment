import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../../styles/home.css";
const Home = () => {
  return (
    <article className="home">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </article>
  );
};

export default Home;
