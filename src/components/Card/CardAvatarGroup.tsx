import React from "react";
import style from "./style.module.css";
import Image from "next/image";
const AvatarGroup = ({ data }: any) => {
  let imgLen = data?.length;
  console.log(data);

  return (
    <div>
      <div className={style.avatar_group}>
        {data?.slice(0, 3).map((img: any, index: number) => (
          <div className={style.avatar} key={index}>
            <Image width={1000} height={1000} alt="" src={img} />
          </div>
        ))}
        {imgLen > 3 && (
          <div className={style.hidden_avatars}>+{imgLen - 3}</div>
        )}
      </div>
    </div>
  );
};

export default AvatarGroup;
