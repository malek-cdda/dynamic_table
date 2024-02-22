import React from "react";
import style from "./style.module.css";
const ProgressBar = ({ row, progressHeight = "8px" }: any) => {
  let progressColor;

  if (row?.progress <= 30) {
    progressColor = "red";
  } else if (row?.progress > 30 && row?.progress <= 60) {
    progressColor = "#ff9800";
  } else {
    progressColor = "#079455";
  }
  return (
    <div className={style.progress_area}>
      <div className={style.progress_bar}>
        <div
          style={{
            width: `${row?.progress}%`,
            backgroundColor: progressColor,
            height: progressHeight,
            borderRadius: "16px",
            transition: "width 0.5s",
          }}></div>
      </div>
      <span>{row?.progress}%</span>
    </div>
  );
};

export default ProgressBar;
