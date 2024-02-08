import React, { useEffect, useState } from "react";
import Table from "./Table";
import SelectButton from "../utils/SelectButton/SelectButton";
import Pagination from "../utils/Pagination/Pagination";

import { handlePageChanges } from "@/hooks/table";
import style from "./style.module.css";
import TableTitle from "./TableTitle";
const TableComponent = ({
  columns,
  data,
  setSelectedRecords = () => {},
  getSortingData,
  isPagination,
  headerShow = true,
  showSelectBox = true,
  newData,
  handleRowShowValue,
  totalPage,
  page,
  limits,
  handlePageChange,
}: any) => {
  return (
    <div style={{ background: "black", borderRadius: "8px" }}>
      <TableTitle />
      <Table
        withBorder
        borderColor="white"
        columns={columns}
        records={newData}
        onSelectedRecords={setSelectedRecords}
        headerShow={headerShow}
        showSelectBox={showSelectBox}
        getSortingData={getSortingData}
        tableAllData={data}
        pagination={
          <div className={style.pagination}>
            <SelectButton handleRowShowValue={handleRowShowValue} />
            <Pagination
              totalPage={totalPage}
              page={page}
              limits={limits}
              siblings={1}
              handlePageChange={handlePageChange}
              activeColor="blue"
            />
          </div>
        }
        isPagination={isPagination}
      />
    </div>
  );
};

export default TableComponent;
