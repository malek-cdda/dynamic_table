import React from "react";
import style from "./style.module.css";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import styled from "styled-components";
// .card_header_title {
//   font-size: 16px;
//   font-weight: 600;
//   color: white;
// }

const CardHeader = () => {
  return (
    <div className={style.card_header}>
      <div className={style.card_avatar_area}>
        <Image
          src="/assets/Logo.svg"
          width={1000}
          height={1000}
          alt="loading"
          className={style.card_avatar_image}
        />
      </div>
      <div>
        <span className={style.card_header_title}>Redesign Layout</span>
        <div className={style.card_header_subtitle}>
          <span className={style.card_position}>Netflix</span>
          <span className={style.card_counting}>
            <CiStopwatch
              style={{
                fontSize: "16px",
              }}
            />
            Urgent
          </span>
          <span className={style.card_following}>
            {" "}
            <MdOutlineWatchLater
              style={{
                fontSize: "16px",
              }}
            />{" "}
            4 months (Estimated)
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
