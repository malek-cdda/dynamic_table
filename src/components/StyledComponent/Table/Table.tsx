"use client";
import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCheckbox,
  TableComponentWrapper,
  TableData,
  TableDataLast,
  TableDataNone,
  TableHead,
  TableHeader,
  TableHeaderFirst,
  TableHeaderLast,
  TableHeaderNone,
  TableRow,
} from "./StyleComponent";
const TableComponent = ({
  columns = [],
  records = [],
  onToggleItem = () => {},
  showSelectBox = false,
  tableHeaderShow = true,
  defaultRowRender,
}: any) => {
  const [toggleItem, setToggleItem] = useState<any>([]);
  const [tableAllData, setTableAllData] = useState<any>(records);
  useEffect(() => {
    setTableAllData(records);
  }, [records]);
  // select box function code here for all data
  const handleAllDataSelectedRecords = (e: any) => {
    if (e === "all") {
      if (toggleItem.length === records.length) {
        setToggleItem([]);
      } else {
        setToggleItem(records);
      }
    } else {
      if (toggleItem.some((item: any) => item.id === e.id)) {
        setToggleItem(toggleItem.filter((item: any) => item.id !== e.id));
      } else {
        setToggleItem([...toggleItem, e]);
      }
    }
  };
  useEffect(() => {
    onToggleItem && onToggleItem(toggleItem);
  }, [onToggleItem, toggleItem]);
  const initialSortConfig = columns.reduce((acc: any, column: any) => {
    if (column?.sortable) {
      acc[column?.accessor] = { key: column?.accessor, direction: "asc" };
    }
    return acc;
  }, {});
  const [sortConfig, setSortConfig] = useState(initialSortConfig);
  const handleSort = (key: string) => {
    const direction = sortConfig[key].direction === "asc" ? "desc" : "asc";
    const newSortConfig = { ...sortConfig, [key]: { key, direction } };

    const resultData =
      tableAllData?.length &&
      [...tableAllData]?.sort((a: any, b: any) => {
        if (direction === "asc") {
          return a[key] > b[key] ? 1 : -1;
        } else if (direction === "desc") {
          return a[key] < b[key] ? 1 : -1;
        }
        return 0;
      });
    console.log(resultData, "resultData");
    setTableAllData(resultData);
    setSortConfig(newSortConfig);
  };
  return (
    <TableComponentWrapper style={{ overflow: "auto" }}>
      {tableAllData?.length && columns?.length > 0 ? (
        <Table>
          {/*  table header area  */}
          {tableHeaderShow && (
            <TableHeader>
              <TableRow>
                {showSelectBox && (
                  <TableHead>
                    {" "}
                    <TableCheckbox
                      type="checkbox"
                      checked={toggleItem.length === records.length}
                      onChange={() => {
                        handleAllDataSelectedRecords("all");
                      }}
                    />
                  </TableHead>
                )}
                {
                  // ?! table header code here
                  columns.map((header: any, index: any) => (
                    <TableHead
                      key={index}
                      style={{
                        cursor: header?.sortable ? "pointer" : "",
                      }}>
                      {header?.title}

                      {header?.sortable && (
                        <span>
                          {sortConfig[header.accessor].key ===
                            header.accessor && (
                            <span>
                              {sortConfig[header.accessor].direction ===
                              "asc" ? (
                                <span
                                  onClick={() => handleSort(header?.accessor)}>
                                  ▲
                                </span>
                              ) : (
                                <span
                                  onClick={() => handleSort(header.accessor)}>
                                  ▼
                                </span>
                              )}
                            </span>
                          )}
                        </span>
                      )}
                    </TableHead>
                  ))
                }
              </TableRow>
            </TableHeader>
          )}
          {/* table body area code here  */}
          <TableBody>
            {tableAllData.map((data: any, index: any) => {
              return (
                <TableRow
                  key={index}
                  onClick={() => {
                    defaultRowRender && defaultRowRender(data);
                  }}
                  $isOnclickRow={defaultRowRender ? "click" : ""}>
                  {tableHeaderShow && showSelectBox && (
                    <TableData>
                      <TableCheckbox
                        type="checkbox"
                        checked={toggleItem.some(
                          (item: any) => item.id === data.id
                        )}
                        onChange={() => handleAllDataSelectedRecords(data)}
                      />
                    </TableData>
                  )}
                  {columns.map((header: any, index: any) => (
                    <TableData key={index}>
                      {header?.render
                        ? header?.render(data)
                        : data[header?.accessor]}
                    </TableData>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <TableDataNone>
          <TableHeaderNone>
            <TableHeaderFirst>Column-1</TableHeaderFirst>
            <TableHeaderLast>Column-2</TableHeaderLast>
          </TableHeaderNone>
          <TableDataLast>No Data Found</TableDataLast>
        </TableDataNone>
      )}
    </TableComponentWrapper>
  );
};

export default TableComponent;
