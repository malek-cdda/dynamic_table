import React from "react";
import {
  CardHeaderWrapper,
  CardHeader,
  CardLeftArea,
  CardHeaderTitle,
  CardHeaderSubtitle,
  CardPosition,
  CardCounting,
  CardFollowing,
} from "./StyledComponent";
import Image from "next/image";
const CardHeaderArea = ({ project, cardObject }: any) => {
  console.log(project[cardObject?.img], "project");
  return (
    <CardHeaderWrapper>
      {typeof cardObject?.subtitle === "string" ? (
        <CardHeader>
          <CardLeftArea>
            <Image
              src={project[cardObject?.img]}
              alt=""
              width={1000}
              height={1000}></Image>
          </CardLeftArea>
          <div>
            <CardHeaderTitle> {project[cardObject?.title]}</CardHeaderTitle>
            <CardHeaderSubtitle>
              <CardPosition>
                <span className="position_1">
                  {project[cardObject?.subtitle]?.length
                    ? project[cardObject?.subtitle][0]
                    : ""}
                </span>
                <span className="position_2"> </span>
              </CardPosition>
              <CardCounting>
                {/* <image src="/assets/stopwatch.svg" alt="stopwatch" /> */}
                <span className="counting_1">
                  {" "}
                  {project[cardObject?.subtitle]?.length
                    ? project[cardObject?.subtitle][1]
                    : ""}
                </span>
                <span className="counting_2"> </span>
              </CardCounting>
              <CardFollowing>
                <Image
                  src="/assets/clock.svg"
                  width={1000}
                  height={1000}
                  alt=""
                />
                {project[cardObject?.subtitle]?.length
                  ? project[cardObject?.subtitle][2]
                  : ""}
              </CardFollowing>
            </CardHeaderSubtitle>
          </div>
        </CardHeader>
      ) : (
        <>{cardObject?.subtitle}</>
      )}
    </CardHeaderWrapper>
  );
};

export default CardHeaderArea;
