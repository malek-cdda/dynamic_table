import React from "react";
import {
  Card,
  CardBodyArea,
  CardBodyDivider,
  CardBodyTitle,
  CardCounting,
  CardFollowing,
  CardHeader,
  CardHeaderSubtitle,
  CardHeaderTitle,
  CardHeaderWrapper,
  CardLeftArea,
  CardPosition,
  CardTimeLine,
  CardTimeLineText,
} from "./StyledComponent";
import Image from "next/image";
import Progressbar from "../components/Progress/Progress";
import AvatarComponent from "../components/AvatarGroup/AvatarGroup";

const CardComponent = ({ project, cardObject }: any) => {
  return (
    <Card>
      {/*   card header are  */}
      <CardHeaderWrapper>
        <CardHeader>
          <CardLeftArea>
            <Image
              src="/assets/profile.png"
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
      </CardHeaderWrapper>
      {/*   card body area  */}
      <CardBodyArea>
        <CardTimeLine>
          <CardBodyTitle>TimeLine</CardBodyTitle>
          <CardTimeLineText> {project[cardObject?.timeline]}</CardTimeLineText>
        </CardTimeLine>
        <CardTimeLine>
          <CardBodyTitle> Project Teams</CardBodyTitle>
          <AvatarComponent
            projectImageData={project[cardObject?.projectteams]}
          />
        </CardTimeLine>
        {/* <div className="absolute  h-2 w-full bg-red-900"></div> */}
        <CardBodyDivider></CardBodyDivider>
        <CardTimeLine>
          <CardBodyTitle>Project Type</CardBodyTitle>

          <CardTimeLineText>
            {" "}
            {project[cardObject?.projecttypes]}
          </CardTimeLineText>
          {/* <CardTimeLineText>12-12-12</CardTimeLineText> */}
        </CardTimeLine>
        <CardTimeLine>
          <CardBodyTitle>Progress</CardBodyTitle>

          <Progressbar progress={project[cardObject?.progress]} />
          {/* <CardTimeLineText>12-12-12</CardTimeLineText> */}
        </CardTimeLine>
      </CardBodyArea>
    </Card>
  );
};

export default CardComponent;
