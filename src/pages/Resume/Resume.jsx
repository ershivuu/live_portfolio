import React from "react";
import MyResume from "../../assets/resume/resume.pdf";
import Header from "../../components/Header/Header";
import "./Resume.css";

function Resume() {
  return (
    <>
      <Header />

      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          src={MyResume}
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </>
  );
}

export default Resume;
