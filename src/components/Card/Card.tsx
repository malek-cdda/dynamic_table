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

const Card = ({ project, btnVariant = "bottom" }: any) => {
  const [showActionBtn, setShowActionBtn] = React.useState(false);
  return (
    <div className={style.card_area}>
      {/* header area of the card component */}
      <div className={style.card_header_area}>
        {" "}
        <CardHeader />
      </div>
      {/*   body area of the card component */}
      <div className={style.card_body_area}>
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
            20 Feb 24 - 20 Jun 24
          </span>
        </div>
        <div className={style.divider}></div>
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
          <AvatarGroup data={project?.projectteams} />
        </div>
        {/* <hr className="w-32"></hr> */}
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
            UI/UX Design
          </span>
        </div>
        <div
          style={{
            width: "100%",
          }}>
          <p>Progress</p>
          <ProgressBar row={project} />
        </div>
      </div>
      {/* for action area of the card component  */}
      {btnVariant === "bottom" && (
        <div className={style.card_action_area}>
          {" "}
          <CardButton
            btnBgColor="#333333"
            icon="assets/more.svg"
            btnColor="#999999"
            text="More"
          />
          <CardButton
            icon="assets/eye.svg"
            btnBgColor="#1570ef"
            btnColor="white"
            text="View"
          />
        </div>
      )}
      {btnVariant === "top" && (
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
            <div className={`${style.action_variant_2_area}  `}>
              <CardButton
                btnBgColor="#333333"
                btnPadding="2px"
                icon="assets/eye.svg"
                iconSite="right"
                text="View"
                position="flex-start"
              />
              <CardButton
                btnBgColor="#333333"
                btnPadding="2px"
                icon="assets/eye.svg"
                iconSite="right"
                text="Edit"
                position="flex-start"
              />
              <CardButton
                btnBgColor="#333333"
                btnPadding="2px"
                icon="assets/eye.svg"
                iconSite="right"
                text="Delete"
                position="flex-start"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
