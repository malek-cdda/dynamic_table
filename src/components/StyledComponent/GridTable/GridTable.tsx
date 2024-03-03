import React, { useState } from "react";
import CardComponent from "../Card/Card";
import TableComponent from "../Table/Table";
import Pagination from "../components/Pagination/Pagination";
import SelectBtn from "../components/SelectArea/Select";
import {
  GridContainer,
  GridTableAllButton,
  GridTableLeftWrapper,
  GridTableSearchField,
  GridTableTextWrapperSubtitle,
  GridTableTextWrapperTitle,
  GridTableViewButton,
  GridTableViewWrapperArea,
  GridTableWrapper,
  GridTableWrapperArea,
} from "./styledComponents";

import Image from "next/image";

const GridTable = ({
  data = [],
  dataAccessor,

  // handleShowActionBtn,
  // showActionBtn,
  page,
  handlePageChange,
  limits,
  totalPage,
  handleRowShowValue,
  showSelectBox,
  tableHeaderShow,
  onToggleItem,
  defaultRowRender,
  isGridList = false,
  renderHeader,
  isPagination = false,
  getSortingData,
}: // isGrid = false,
any) => {
  const [isGrid, setIsGrid] = React.useState(false); // logic for grid and list view
  let cardObject: any;
  let columns = dataAccessor;
  if (dataAccessor?.length >= 1) {
    columns = dataAccessor;
  } else if (typeof dataAccessor === "object") {
    cardObject = dataAccessor?.card;
    columns = dataAccessor?.table;
  }
  const [showActionBtn, setShowActionBtn] = useState<any>(null);
  const handleShowActionBtn = (id: any) => {
    if (showActionBtn === id) {
      setShowActionBtn(null);
    } else {
      setShowActionBtn(id);
    }
  };
  return (
    <GridTableWrapperArea>
      <GridTableWrapper>
        {!renderHeader && <div> {renderHeader && renderHeader()}</div>}
        {renderHeader && renderHeader()}
        {isGridList && (
          <GridTableViewWrapperArea>
            <GridTableViewButton onClick={() => setIsGrid(false)}>
              <Image
                src="/assets/row-vertical.svg"
                width={20}
                height={20}
                alt=""
              />
              <span> List View</span>
            </GridTableViewButton>
            <GridTableViewButton onClick={() => setIsGrid(true)}>
              <Image
                src="/assets/element-3.svg"
                width={20}
                height={20}
                alt=""
              />
              <span>Grid View</span>
            </GridTableViewButton>
          </GridTableViewWrapperArea>
        )}
      </GridTableWrapper>

      {isGrid ? (
        <GridContainer>
          {data.map((project: any, index: any) => {
            return (
              <CardComponent
                key={index}
                project={project}
                cardObject={cardObject}
                handleShowActionBtn={handleShowActionBtn}
                showActionBtn={showActionBtn}
              />
            );
          })}
        </GridContainer>
      ) : (
        <TableComponent
          records={data}
          columns={columns}
          showSelectBox={showSelectBox}
          tableHeaderShow={tableHeaderShow}
          onToggleItem={onToggleItem}
          defaultRowRender={defaultRowRender}
          getSortingData={getSortingData}
        />
      )}
      {isPagination && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 0px 15px 0px",
            backgroundColor: "black",
          }}>
          {" "}
          <div>
            {!isGrid && <SelectBtn handleRowShowValue={handleRowShowValue} />}
          </div>
          <div>
            <Pagination
              totalPage={totalPage}
              page={page}
              limits={limits}
              siblings={1}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </GridTableWrapperArea>
  );
};

export default GridTable;
