import React from "react";
import {
  ActionButtonArea,
  CardFooterWrapper,
  CardUpperActionButtonWrapper,
  ToggleButton,
} from "./StyledComponent";
import Image from "next/image";
const CardButtonArea = ({
  actionButtonPosition = "bottom",
  cardObject,
  project,
  handleShowActionBtn,
  showActionBtn,
}: any) => {
  return (
    <>
      {actionButtonPosition === "top" ? (
        <CardUpperActionButtonWrapper>
          <ToggleButton onClick={() => handleShowActionBtn(project.id)}>
            <Image
              src="/assets/vertical.svg"
              width={1000}
              height={1000}
              alt="more"
            />
          </ToggleButton>
          {project.id === showActionBtn ? (
            <ActionButtonArea>
              {cardObject?.actions && cardObject?.actions(project)}
            </ActionButtonArea>
          ) : (
            ""
          )}
        </CardUpperActionButtonWrapper>
      ) : (
        <CardFooterWrapper>
          {" "}
          {cardObject?.actions && cardObject?.actions(project)}
        </CardFooterWrapper>
      )}
    </>
  );
};

export default CardButtonArea;
