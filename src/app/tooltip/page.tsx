"use client";
import React, { useEffect } from "react";
import style from "./style.module.css";
const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      var loadTime =
        window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.navigationStart;
    }
  }, []);
  return (
    <div className="  flex justify-center ">
      <div className={style.tooltip} id="tooltip">
        Hover over me
        <span className={style.tooltiptext} id="tooltip_text">
          Tooltip text
        </span>
      </div>
    </div>
  );
};

export default Home;
