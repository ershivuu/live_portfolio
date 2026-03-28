import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Signature.css";
import signatureimg from "../../assets/images/signature.png";

function Signature() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const signatures = document.querySelectorAll(".signature-main");

    signatures.forEach((signature) => {
      gsap.fromTo(
        signature,
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
            trigger: signature,
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
      <div className="signature-main">
        <div className="signature">
          <img src={signatureimg} alt="Signature" />
        </div>
        <div className="contact-info">
          <p>Let's work together</p>
          <p>
            <a href="mailto:er.shivamsg@gmail.com">er.shivamsg@gmail.com</a> ||
            <a href="tel:+917879401825">+91 78794 01825</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signature;
