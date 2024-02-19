import React, { useEffect, useState } from "react";
import Table from "./Table";
import SelectButton from "../utils/SelectButton/SelectButton";
import Pagination from "../utils/Pagination/Pagination";

import { handlePageChanges } from "@/components/TableComponent/utils/table";
import style from "./style.module.css";
import TableTitle from "./TableTitle";
const TableComponent = ({
  columns,
  data,
  setSelectedRecords = () => {},
  getSortingData,
  isPagination = false,
  headerShow = true,
  showSelectBox = false,
  newData,
  handleRowShowValue,
  totalPage,
  page,
  limits,
  handlePageChange,
}: any) => {
  const rowClass = (index: any, data: any) => {
    console.log(data);
    return data?.id == 2 ? "bg-red-800 hover:bg-green-700" : "";
  };
  return (
    <div style={{ background: "black", borderRadius: "8px" }}>
      <TableTitle />
      <Table
        // withBorder
        borderColor="white"
        columns={columns}
        records={newData ? newData : data}
        onSelectedRecords={setSelectedRecords}
        headerShow={headerShow}
        showSelectBox={showSelectBox}
        getSortingData={getSortingData}
        tableAllData={data}
        rowClass={rowClass}
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
