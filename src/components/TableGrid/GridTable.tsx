import React from "react";
import Card from "../Card/Card";
import Table from "../TableComponent/Table";

const GridTable = ({
  data = [],
  dataAccessor,
  isGrid = false,
  actionButtonPosition,
  handleShowActionBtn,
  showActionBtn,
}: any) => {
  let cardObject: any;
  let columns = dataAccessor;
  if (dataAccessor?.length >= 1) {
    columns = dataAccessor;
  } else if (typeof dataAccessor === "object") {
    cardObject = dataAccessor?.card;
    columns = dataAccessor?.table;
  }

  return (
    <div>
      {isGrid ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gridGap: "20px",
          }}>
          {data.map((project: any, index: any) => {
            return (
              <Card
                key={index}
                project={project}
                cardObject={cardObject}
                actionButtonPosition={actionButtonPosition}
                handleShowActionBtn={handleShowActionBtn}
                showActionBtn={showActionBtn}
              />
            );
          })}
        </div>
      ) : (
        <Table records={data} columns={columns} />
      )}
    </div>
  );
};

export default GridTable;
