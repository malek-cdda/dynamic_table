"use client";
import React, { useState } from "react";
import {
  TableDataLast,
  TableDataNone,
  TableHeaderNone,
  TableHeaderFirst,
  TableHeaderLast,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableData,
  TableBody,
  TableCheckbox,
} from "./StyleComponent";
import Pagination from "../components/Pagination/Pagination";

const TableComponent = ({ columns = [], records = [] }) => {
  const [page, setPage] = useState<number | string>(1);
  const handlePageChange = (page: number | string) => {
    setPage(page);
  };
  return (
    <>
      {records?.length && columns?.length > 0 ? (
        <Table>
          {/*  table header area  */}
          <TableHeader>
            <TableRow>
              <TableHead>
                {" "}
                <TableCheckbox type="checkbox" />
              </TableHead>
              {
                // ?! table header code here
                columns.map((header: any, index: any) => (
                  <TableHead key={index}>{header?.title}</TableHead>
                ))
              }
            </TableRow>
          </TableHeader>
          {/* table body area code here  */}
          <TableBody>
            {records.map((data: any, index: any) => {
              return (
                <TableRow key={index}>
                  <TableData>
                    <TableCheckbox type="checkbox" />
                  </TableData>
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
      {/* <Pagination
        totalPage={10}
        page={page}
        limits={2}
        siblings={2}
        handlePageChange={handlePageChange}
      /> */}
    </>
  );
};

export default TableComponent;
