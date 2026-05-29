import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NoPage.css";

function NoPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="nopage-container">
      <div className="nopage-card">
        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <div className="redirect-text">
          You will be redirected to the Home Page in <span>{count}</span>{" "}
          seconds...
        </div>
      </div>
    </div>
  );
}

export default NoPage;
