"use client";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { handleAllDataSelectedRecord } from "@/components/TableComponent/utils/table";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

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
                color: "white",
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
                tbColor="white"
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
        <div className={style.no_data_found}>
          <div className={style.no_data_header}>
            <span>Column-1</span>
            <span>Column-2</span>
          </div>
          <div>
            <span>No Data Found</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
