import React from "react";
import style from "./style.module.css";
const ProgressBar = ({ progress, progressHeight = "8px" }: any) => {
  let progressColor;
  console.log(progress, "progress");
  if (progress <= 30) {
    progressColor = "red";
  } else if (progress > 30 && progress <= 60) {
    progressColor = "#ff9800";
  } else {
    progressColor = "#079455";
  }
  return (
    <div className={style.progress_area}>
      <div className={style.progress_bar}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: progressColor,
            height: progressHeight,
            borderRadius: "16px",
            transition: "width 0.5s",
          }}></div>
      </div>
      <span>{progress}%</span>
    </div>
  );
};

export default ProgressBar;
