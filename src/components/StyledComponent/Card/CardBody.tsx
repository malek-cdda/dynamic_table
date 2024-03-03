import React from "react";
import {
  CardBodyAreaWrapper,
  CardBodyDivider,
  CardBodyTitle,
  CardBodyPartWrapper,
  CardTimeLineText,
} from "./StyledComponent";
import AvatarComponent from "../components/AvatarGroup/AvatarGroup";
import Progressbar from "../components/Progress/Progress";

const CardBody = ({ project, cardObject }: any) => {
  const projectData = [
    {
      title: cardObject?.timeline,
      text: "TimeLine",
      type: "timeline",
    },
    {
      title: cardObject?.projectteams,
      text: "Project Teams",
      type: "team",
    },
    {
      title: cardObject?.projecttypes,
      text: "Project Type",
      type: "types",
    },
    {
      title: cardObject?.progress,
      text: "Progress",
      type: "progress",
    },
  ];
  let value = [];
  for (let i = 0; i < projectData?.length; i++) {
    project[projectData[i]?.title] && value.push(i);
  }
  console.log(value, "value");
  return (
    <CardBodyAreaWrapper>
      {projectData.map((item, index) => {
        return (
          project[item?.title] && (
            <CardBodyPartWrapper
              key={index}
              $isKey={value.length}
              $isIndex={index}>
              <CardBodyTitle>
                {project[item?.title] && item?.text}
              </CardBodyTitle>
              {(item?.type === "types" || item?.type === "timeline") && (
                <CardTimeLineText>
                  {" "}
                  {project[item?.title] && project[item?.title]}
                </CardTimeLineText>
              )}
              {item?.type === "team" && (
                <AvatarComponent projectImageData={project[item?.title]} />
              )}
              {item?.type === "progress" && (
                <Progressbar progress={project[item?.title]} />
              )}
            </CardBodyPartWrapper>
          )
        );
      })}
    </CardBodyAreaWrapper>
  );
};

export default CardBody;
