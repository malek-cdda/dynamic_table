import React, { useEffect, useState } from "react";
import Table from "./Table";

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
  Pagination,
}: any) => {
  const rowClass = (index: any, data: any) => {
    return data?.id == 2 ? "bg-red-800 hover:bg-yellow-700" : "";
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
        striped={true}
        hoverHighlight={true}
        pagination={Pagination}
        isPagination={isPagination}
      />
    </div>
  );
};

export default TableComponent;
