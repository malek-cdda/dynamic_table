import React from "react";
import style from "./style.module.css";
const SocialIcon = ({ user }: any) => {
  return (
    <div className={style.card_icon_sec}>
      {user?.socialIcon &&
        user?.socialIcon?.map((icons: any, index: any) => (
          <a
            key={index}
            href={icons?.href}
            target="_blank"
            className={style.card_icon}>
            {icons?.icon ? icons?.icon : null}
          </a>
        ))}
    </div>
  );
};

export default SocialIcon;
