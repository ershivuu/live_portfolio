import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const istTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(istTime + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  const scrambleText = (e) => {
    let iteration = 0;
    const original = e.target.dataset.value;

    // only letters from the original word
    const letters = original.split("");

    clearInterval(e.target.interval);

    e.target.interval = setInterval(() => {
      e.target.innerText = original
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return original[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= original.length) {
        clearInterval(e.target.interval);
      }

      iteration += 0.5;
    }, 40);
  };

  return (
    <>
      <div className="footer-main-container">
        <div className="footer-data">
          <div className="show-time">
            <p>Indian time </p>
            <p>{time}</p>
          </div>
          <div className="social-connect">
            <a
              href="https://www.linkedin.com/in/react-dev-shivam/"
              target="_blank"
              rel="noreferrer"
              data-value="LINKEDIN"
              onMouseEnter={scrambleText}
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/ershivuu"
              target="_blank"
              rel="noreferrer"
              data-value="GITHUB"
              onMouseEnter={scrambleText}
            >
              GITHUB
            </a>
            <a
              href="https://wa.me/7879401825"
              target="_blank"
              rel="noreferrer"
              data-value="WHATSAPP"
              onMouseEnter={scrambleText}
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
