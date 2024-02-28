"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { handleAllDataSelectedRecord } from "@/components/TableComponent/utils/table";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import {
  TableDataLast,
  TableDataNone,
  TableHeaderNone,
  TableHeaderFirst,
  TableHeaderLast,
} from "../StyleComponentTable/StyleComponent";

const Table = ({
  columns = [],
  records = [],
  onSelectedRecords,
  showSelectBox = false,
  headerShow = true,
  getSortingData = () => {},
  tableAllData,
  pagination,
  rowClass,
  isPagination = true,
  withBorder = false,
  borderColor = "red",
  striped = false,
  hoverHighlight,
  tableBgColor = "white",
  thColor = "#8d8d8d",
  tbColor = "white",
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
  console.log(records.length, "records");
  return (
    <>
      {records?.length && columns?.length > 0 ? (
        <div
          className={style.table_area}
          style={{
            border: withBorder && `${borderColor} .2px solid`,
          }}>
          <div className={style.table}>
            <table
              id={style.customers}
              style={{
                background: tableBgColor,
                color: "black",
              }}>
              {/* table header and body */}
              {headerShow && columns?.length > 0 && (
                <TableHeader
                  columns={columns}
                  records={records}
                  handleAllDataSelectedRecords={handleAllDataSelectedRecords}
                  toggleProduct={toggleProduct}
                  showSelectBox={showSelectBox}
                  getSortingData={getSortingData}
                  tableAllData={tableAllData}
                  thColor={thColor}
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
                rowClass={rowClass}
                striped={striped}
                hoverHighlight={hoverHighlight}
                tbColor="black"
              />
              {/* 
          <tfoot className="w-full">
            <tr>
              {columns.map((column: any, index: number) => (
                <td key={index}>{column?.footer ? column?.footer : ""}</td>
              ))}
            </tr>
          </tfoot> */}
            </table>
          </div>
          {isPagination && pagination && pagination}
        </div>
      ) : (
        <TableDataNone>
          <TableHeaderNone>
            <TableHeaderFirst>Column-1</TableHeaderFirst>
            <TableHeaderLast>Column-2</TableHeaderLast>
          </TableHeaderNone>
          <TableDataLast>No Data Found</TableDataLast>
        </TableDataNone>
      )}
    </>
  );
};

export default Table;
