import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Project.css";
import Header from "../../components/Header/Header";
import linkImage from "../../assets/logo/arrow.png";
import Footer from "../../components/Footer/Footer";
import Signature from "../Signature/Signature";
import realestate from "../../assets/images/projects/realestate.png";
import jobportal from "../../assets/images/projects/jobportal.png";
import itcompany from "../../assets/images/projects/itcompany.png";
import automation from "../../assets/images/projects/automation.png";
import whatsappstore from "../../assets/images/projects/whatsappstore.png";

function Project() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const projects = document.querySelectorAll(".project-showcase");

    projects.forEach((project) => {
      gsap.fromTo(
        project,
        {
          y: 180,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <Header />
      <div className="project-section">
        <div className="project-showcase">
          <div className="project-name">
            <p>Career Portal</p>
          </div>
          <div className="project-description">
            <p>
              Built a SaaS career portal enabling universities to manage job
              postings, student applications, and admin controls with
              white-label customization.
            </p>
          </div>
          <div className="project-banner">
            <img src={jobportal} alt="" />
          </div>
          <div className="project-link">
            <a href="" target="_blank">
              <img src={linkImage} alt="" />
            </a>
          </div>
        </div>
        <div className="project-showcase">
          <div className="project-name">
            <p>Automation</p>
          </div>
          <div className="project-description">
            <p>
              Built a web automation utility using Node.js and Playwright to
              simulate user interactions, manage login workflows, and execute
              tasks with retry and delay strategies.
            </p>
          </div>
          <div className="project-banner">
            <img src={automation} alt="" />
          </div>
          <div className="project-link">
            <a href="" target="_blank">
              <img src={linkImage} alt="" />
            </a>
          </div>
        </div>
        <div className="project-showcase">
          <div className="project-name">
            <p>Real Estate</p>
          </div>
          <div className="project-description">
            <p>
              Developed a real estate platform with an admin panel, enabling
              property listing management, image updates, and white-label
              customization.
            </p>
          </div>
          <div className="project-banner">
            <img src={realestate} alt="" />
          </div>
          <div className="project-link">
            <a href="" target="_blank">
              <img src={linkImage} alt="" />
            </a>
          </div>
        </div>
        <div className="project-showcase">
          <div className="project-name">
            <p>IT Platform</p>
          </div>
          <div className="project-description">
            <p>
              Developed an IT company platform with an admin panel, enabling
              content management, job posting, and white-label customization.
            </p>
          </div>
          <div className="project-banner">
            <img src={itcompany} alt="" />
          </div>
          <div className="project-link">
            <a href="" target="_blank">
              <img src={linkImage} alt="" />
            </a>
          </div>
        </div>
        <div className="project-showcase">
          <div className="project-name">
            <p>WhatsApp Store</p>
          </div>
          <div className="project-description">
            <p>
              No-code store builder that allows sellers to create product
              catalogs and receive orders directly via WhatsApp, simplifying
              online selling for small businesses.
            </p>
          </div>
          <div className="project-banner">
            <img src={whatsappstore} alt="" />
          </div>
          <div className="project-link">
            <a href="" target="_blank">
              <img src={linkImage} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Signature />
      <Footer />
    </>
  );
}

export default Project;
