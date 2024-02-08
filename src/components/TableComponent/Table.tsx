"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { handleAllDataSelectedRecord } from "@/components/TableComponent/utils/table";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

const Table = ({
  columns,
  records,
  onSelectedRecords,
  showSelectBox = true,
  headerShow = true,
  getSortingData = () => {},
  tableAllData,
  pagination,
  isPagination = true,
  withBorder = false,
  borderColor = "red",
}: any) => {
  // ?! all selected table area here
  const [toggleProduct, setToggleProduct] = useState<any>([]);
  // select box function code here for all data
  const handleAllDataSelectedRecords = (e: any) => {
    handleAllDataSelectedRecord(e, toggleProduct, setToggleProduct, records);
  };
  useEffect(() => {
    onSelectedRecords && onSelectedRecords(toggleProduct);
  }, [toggleProduct, onSelectedRecords]);
  return (
    <div
      className={style.table_area}
      style={{ border: withBorder && `${borderColor} .2px solid` }}>
      <div className={style.table}>
        <table id={style.customers}>
          {/* table header and body */}
          {headerShow && (
            <TableHeader
              columns={columns}
              records={records}
              handleAllDataSelectedRecords={handleAllDataSelectedRecords}
              toggleProduct={toggleProduct}
              showSelectBox={showSelectBox}
              getSortingData={getSortingData}
              tableAllData={tableAllData}
            />
          )}
          <TableBody
            columns={columns}
            records={records}
            handleAllDataSelectedRecords={handleAllDataSelectedRecords}
            toggleProduct={toggleProduct}
            showSelectBox={
              showSelectBox ? true : headerShow ? showSelectBox : false
            }
          />
        </table>
      </div>
      {isPagination && pagination}
    </div>
  );
};

export default Table;
