import React from "react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";
import Header from "../../components/Header/Header";
import bgimg from "../../assets/images/bag2.png";
import webdimg from "../../assets/images/services/webd.png";
import performancimg from "../../assets/images/services/performanc.jpg";
import admindashboardimg from "../../assets/images/services/admindashboard.png";
import apiintegrationimg from "../../assets/images/services/apiintegration.png";
import saasapplicationimg from "../../assets/images/services/saasapplication.png";
import fullstackimg from "../../assets/images/services/fullstack.png";
import browserimg from "../../assets/images/services/browser.png";
import Footer from "../../components/Footer/Footer";
import Signature from "../Signature/Signature";

function Services() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop animation
    mm.add("(min-width: 768px)", () => {
      const services = document.querySelectorAll(".service-type");

      services.forEach((service, index) => {
        const xValue = index % 2 === 0 ? -250 : 250;

        gsap.fromTo(
          service,
          {
            x: xValue,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    // Mobile animation
    mm.add("(max-width: 767px)", () => {
      const services = document.querySelectorAll(".service-type");

      services.forEach((service) => {
        gsap.fromTo(
          service,
          {
            y: 120,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <>
      <Header />
      <div className="service-section">
        <div className="my-services">
          <div className="bg-img">
            <img src={bgimg} alt="" srcset="" />
          </div>
          <div className="service-heading">
            <p>Services</p>
            <p>
              I provide modern web development services focused on building
              fast, scalable, and user-friendly applications. From responsive
              frontend interfaces to complete full-stack solutions, I develop
              high-quality digital products with clean, efficient, and
              maintainable code. My goal is to transform ideas into powerful web
              applications that deliver smooth user experiences, reliable
              performance, and long-term scalability. I work with modern
              technologies such as React.js and Node.js to create optimized
              solutions that are ready for real-world use.
            </p>
          </div>
        </div>
        <div className="services-container">
          <div className="service-type">
            <div className="service-img">
              <img src={webdimg} alt="" />
            </div>

            <div className="abt-service">
              <div className="service-name">
                <p> Interactive Web Development</p>
              </div>
              <div className="service-description">
                <p>
                  Interactive web development is about creating dynamic and
                  responsive web applications that react to user actions in real
                  time. Using modern technologies such as React.js and optimized
                  frontend practices, I build engaging interfaces that deliver
                  smooth performance, intuitive interactions, and a seamless
                  user experience across devices.
                </p>
              </div>
            </div>
          </div>
          <div className="service-type">
            <div className="service-img">
              <img src={fullstackimg} alt="" />
            </div>

            <div className="abt-service">
              <div className="service-name">
                <p>Full Stack Development</p>
              </div>
              <div className="service-description">
                <p>
                  Full stack development focuses on building complete web
                  applications that include both frontend interfaces and backend
                  systems. Using technologies such as React.js and Node.js, I
                  develop scalable applications with secure APIs, efficient
                  database management, and optimized performance to deliver
                  reliable and high-quality digital solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="service-type">
            <div className="service-img">
              <img src={saasapplicationimg} alt="" />
            </div>

            <div className="abt-service">
              <div className="service-name">
                <p>SaaS Application Development</p>
              </div>
              <div className="service-description">
                <p>
                  SaaS application development involves creating scalable
                  cloud-based platforms that support multiple users and
                  businesses efficiently. I build modern SaaS products with
                  secure authentication, admin dashboards, subscription systems,
                  and optimized architectures to ensure smooth performance,
                  flexibility, and long-term scalability.
                </p>
              </div>
            </div>
          </div>
          <div className="service-type">
            <div className="service-img">
              <img src={performancimg} alt="" />
            </div>

            <div className="abt-service">
              <div className="service-name">
                <p>Web Performance Optimization</p>
              </div>
              <div className="service-description">
                <p>
                  Web performance optimization focuses on improving the speed
                  and efficiency of web applications to deliver a better user
                  experience. By optimizing code, reducing load times, and
                  implementing efficient rendering techniques, I ensure that
                  websites run smoothly, load quickly, and maintain high
                  performance across different devices.
                </p>
              </div>
            </div>
          </div>
          <div className="service-type">
            <div className="service-img">
              <img src={apiintegrationimg} alt="" />
            </div>

            <div className="abt-service">
              <div className="service-name">
                <p>API Integration</p>
              </div>
              <div className="service-description">
                <p>
                  API integration enables applications to communicate and
                  exchange data with external services and systems efficiently.
                  I integrate secure REST APIs and third-party platforms to
                  build data-driven applications that provide seamless
                  functionality, reliable communication, and enhanced
                  capabilities for modern web solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="service-type">
            <div className="service-img">
              <img src={admindashboardimg} alt="" />
            </div>

            <div className="abt-service">
              <div className="service-name">
                <p>Admin Dashboard Development</p>
              </div>
              <div className="service-description">
                <p>
                  Admin dashboard development focuses on creating powerful
                  management panels that allow businesses to control their
                  platforms efficiently. I build user-friendly dashboards for
                  managing content, users, analytics, and business operations,
                  ensuring secure access, clear data visualization, and smooth
                  workflow management.
                </p>
              </div>
            </div>
          </div>
          <div className="service-type">
            <div className="service-img">
              <img src={browserimg} alt="" />
            </div>

            <div className="abt-service">
              <div className="service-name">
                <p>Browser Automation Solutions</p>
              </div>
              <div className="service-description">
                <p>
                  Browser automation solutions help automate repetitive web
                  tasks and workflows using modern automation tools. I develop
                  automation scripts that simulate real user interactions to
                  perform actions such as form handling, navigation, and data
                  processing. These solutions improve efficiency, reduce manual
                  effort, and ensure reliable execution of automated workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Signature />
      <Footer />
    </>
  );
}

export default Services;
