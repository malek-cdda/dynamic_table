import React from "react";
import { Card } from "./StyledComponent";
import CardButtonArea from "./CardButtonArea";
import CardBody from "./CardBody";
import CardHeaderArea from "./CardHeader";
const CardComponent = ({
  project,
  cardObject,
  actionButtonPosition,
  handleShowActionBtn,
  showActionBtn,
}: any) => {
  return (
    <Card>
      {/*   card header are  */}
      <CardHeaderArea project={project} cardObject={cardObject} />
      {/*   card body area  */}
      <CardBody project={project} cardObject={cardObject} />
      {/* action area code here  */}
      <CardButtonArea
        cardObject={cardObject}
        project={project}
        actionButtonPosition={actionButtonPosition}
        handleShowActionBtn={handleShowActionBtn}
        showActionBtn={showActionBtn}
      />
    </Card>
  );
};

export default CardComponent;
