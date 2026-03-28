import React from "react";
import Header from "../../components/Header/Header";
import About from "../About/About";
import "./Home.css";
import Signature from "../Signature/Signature";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />

      <div className="main-section-1">
        <div className="hero-section">
          <div className="scroll-track">
            <div className="hero-heading">Creative Developer&nbsp;</div>
            <div className="hero-heading">Creative Developer&nbsp;</div>
            <div className="hero-heading">Creative Developer&nbsp;</div>
            <div className="hero-heading">Creative Developer&nbsp;</div>
            <div className="hero-heading">Creative Developer&nbsp;</div>
            <div className="hero-heading">Creative Developer&nbsp;</div>
            <div className="hero-heading">Creative Developer&nbsp;</div>
            <div className="hero-heading">Creative Developer&nbsp;</div>
          </div>
        </div>
        <div className="hero-img"></div>
        <div className="sub-title">
          <div>
            <p>
              Available for <br /> fulltime or freelance
            </p>
          </div>
          <div className="location">
            <p>
              Live in, <br /> Sagar India
            </p>
          </div>
        </div>
      </div>
      <div className="hero-img"></div>
      <div>
        <About />
        <Signature />
      </div>
    </>
  );
}

export default Home;
