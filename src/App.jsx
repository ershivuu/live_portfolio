import React from "react";
import Home from "./pages/Home/Home";
import Project from "./pages/Projects/Project";
import Services from "./pages/Services/Services";
import Resume from "./pages/Resume/Resume";
import "./App.css";
import NoPage from "./pages/NoPage/NoPage";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects" element={<Project />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
