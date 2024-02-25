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
const CardHeaderTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

// .card_following {
//   padding-left: 12px;
//   display: flex;
//   align-items: center;
//   gap: 4px;
//   color: #808080;
//   line-height: 18px;
// }
const CardHeaderSubtitle = styled.div`
  font-size: 14px;
  color: #808080;
  display: flex;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const CardPosition = styled.span`
  padding-right: 12px;
  border-right: 1px solid #808080;
  color: #808080;
  line-height: 18px;
`;
const CardCounting = styled.span`
  padding: 0px 12px;
  border-right: 1px solid #808080;
  display: flex;
  align-items: center;
  color: #808080;
  gap: 4px;
  line-height: 18px;
`;
const CardFollowing = styled.span`
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #808080;
  line-height: 18px;
`;
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
