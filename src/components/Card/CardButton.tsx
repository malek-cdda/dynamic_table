import React from "react";
import style from "./style.module.css";
import Image from "next/image";

type cardButtonProps = {
  text?: string;
  btnBgColor?: string;
  btnColor?: string;
  showIcon?: boolean;
  icon?: any;
  btnWidth?: string;
  btnPadding?: string;
  iconHeight?: string;
  iconWidth?: string;
  iconSite?: string;
  position?: string;
};
const CardButton = ({
  text = "Submit",
  btnBgColor = "black",
  btnColor = "#999999",
  btnWidth = "100%",
  btnPadding = "10px",
  iconHeight = "16px",
  iconWidth = "16px",
  showIcon = true,
  icon = "",
  iconSite = "left",
  position = "center",
}: cardButtonProps) => {
  return (
    <button
      className={style.card_button_area}
      style={{
        backgroundColor: btnBgColor,
        color: btnColor,
        width: btnWidth,
        padding: btnPadding,
        display: "flex",
        justifyContent: position,
        alignItems: "center",
      }}>
      {iconSite === "right" && showIcon && icon?.length ? (
        <Icon iconHeight={iconHeight} iconWidth={iconWidth} icon={icon} />
      ) : null}
      <span> {text}</span>
      {iconSite === "left" && showIcon && icon?.length ? (
        <Icon iconHeight={iconHeight} iconWidth={iconWidth} icon={icon} />
      ) : null}
    </button>
  );
};

export default CardButton;

const Icon = ({ iconHeight, icon, iconWidth }: any) => {
  return (
    <Image
      style={{
        height: iconHeight,
        width: iconWidth,
      }}
      src={icon}
      width={1000}
      height={1000}
      className={style.card_button_circle}
      alt="loading"
    />
  );
};
