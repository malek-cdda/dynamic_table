import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import SocialIcon from "./SocialIcon";
import AvatarGroup from "./CardAvatarGroup";
import CardHeader from "./CardHeader";
import ProgressBar from "./ProgressBar";
import CardButton from "./CardButton";

const Card = ({
  project = {},
  actionButtonPosition = "bottom",
  cardObject = {},
}: any) => {
  const [showActionBtn, setShowActionBtn] = React.useState(false);
  return (
    <div className={style.card_area}>
      {/* header area of the card component */}
      <div className={style.card_header_area}>
        {" "}
        <CardHeader project={project} cardObject={cardObject} />
      </div>
      {/*   body area of the card component */}
      <div className={style.card_body_area}>
        {project[cardObject?.timeline] && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRight: "1px solid #4F4F4F",
            }}>
            <p>Timeline</p>
            <span
              style={{
                fontSize: "14px",
                color: "white",
                fontWeight: 500,
              }}>
              {project[cardObject?.timeline]}
            </span>
          </div>
        )}
        <div className={style.divider}></div>
        {project[cardObject?.projectteams] && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            {" "}
            <p>Project Teams</p>
            <AvatarGroup data={project[cardObject?.projectteams]} />
          </div>
        )}
        {/* <hr className="w-32"></hr> */}
        {project[cardObject?.projecttypes] && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRight: "1px solid #4F4F4F",
            }}>
            <p>Project Type</p>
            <span
              style={{
                fontSize: "14px",
                color: "white",
                fontWeight: 500,
              }}>
              {project[cardObject?.projecttypes]}
            </span>
          </div>
        )}
        {project[cardObject?.progress] && (
          <div
            style={{
              width: "100%",
            }}>
            <p>Progress</p>
            <ProgressBar progress={project[cardObject?.progress]} />
          </div>
        )}
      </div>
      {/* for action area of the card component  */}
      <>
        {/* cardObject is render system for action button  */}{" "}
        {actionButtonPosition === "bottom" && (
          <>
            {cardObject?.actions && (
              <div className={style.card_action_area}>
                {" "}
                {cardObject?.actions(project)}
              </div>
            )}
          </>
        )}
        {actionButtonPosition === "top" && (
          <>
            {cardObject?.actions && (
              <div className={style.action_variant_2}>
                <button
                  className={style.action_btn_2}
                  onClick={() => setShowActionBtn(!showActionBtn)}>
                  <Image
                    src="/assets/vertical.svg"
                    width={20}
                    height={20}
                    alt="more"
                    className=""
                  />
                </button>
                {showActionBtn && (
                  <div>
                    <div className={`${style.action_variant_2_area}  `}>
                      {cardObject?.actions(project)}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Card;
