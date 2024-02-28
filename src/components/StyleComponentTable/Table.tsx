"use client";
import React from "react";
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

const TableComponent = ({ columns = [], records = [] }) => {
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
    </>
  );
};

export default TableComponent;
