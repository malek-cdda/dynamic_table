import React from "react";
import style from "./style.module.css";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import styled from "styled-components";

const CardHeader = ({ project, cardObject }: any) => {
  console.log(
    project?.colums,
    "project",
    cardObject,
    "cardObject",
    project[cardObject],
    "project[cardObject?.title]"
  );
  return (
    <div className={style.card_header}>
      {project[cardObject?.img] && (
        <div className={style.card_avatar_area}>
          <Image
            src={project[cardObject?.img]}
            width={1000}
            height={1000}
            alt="loading"
            className={style.card_avatar_image}
          />
        </div>
      )}

      <div>
        <span className={style.card_header_title}>
          {project[cardObject?.title]}
        </span>
        <div className={style.card_header_subtitle}>
          {project[cardObject?.subtitle]?.length && (
            <span className={style.card_position}>
              <span>
                {project[cardObject?.subtitle]?.length
                  ? project[cardObject?.subtitle][0]
                  : ""}
              </span>
              <span> </span>
            </span>
          )}
          {project[cardObject?.subtitle]?.length && (
            <span className={style.card_counting}>
              <CiStopwatch
                style={{
                  fontSize: "16px",
                }}
              />
              <span>
                {" "}
                {project[cardObject?.subtitle]?.length
                  ? project[cardObject?.subtitle][1]
                  : ""}
              </span>
              <span></span>
            </span>
          )}
          {project[cardObject?.subtitle]?.length && (
            <span className={style.card_following}>
              {" "}
              <MdOutlineWatchLater
                style={{
                  fontSize: "16px",
                }}
              />{" "}
              {project[cardObject?.subtitle]?.length
                ? project[cardObject?.subtitle][2]
                : ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
