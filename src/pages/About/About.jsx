import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const abouts = document.querySelectorAll(".about-section");

    abouts.forEach((about) => {
      gsap.fromTo(
        about,
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
            trigger: about,
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
      <div className="about-wrapper">
        <div className="about-section">
          <div className="abt-heading">
            <p>I am</p>
          </div>
          <div className="abt-description">
            <p>
              A software developer with 2+ years of experience building
              production-grade SaaS applications using React, TypeScript, and
              Node.js, focused on scalable architecture and performance.
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="abt-heading">
            <p>Experienced</p>
          </div>
          <div className="abt-description">
            <p>
              I build production-ready web applications with a focus on
              scalability, performance, and clean architecture. My approach
              combines technical precision with seamless user experience.
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="abt-heading">
            <p>Passionate</p>
          </div>
          <div className="abt-description">
            <p>
              I continuously push myself to learn and evolve with new
              technologies. My focus is on delivering optimized, high-quality
              solutions that exceed expectations.
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="abt-heading">
            <p>Creative</p>
          </div>
          <div className="abt-description">
            <p>
              I build interactive and engaging user experiences with modern
              technologies. Combining creativity with clean execution is what
              drives my passion for development.
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="abt-heading">
            <p>Developer</p>
          </div>
          <div className="abt-description">
            <p>
              As a developer, I focus on solving real-world problems through
              scalable and maintainable solutions. I seek challenging projects
              where I can contribute meaningfully while continuing to grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
