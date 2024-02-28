"use client";
import CardStyled from "@/components/CardStyledComponents/Index";
import Table from "@/components/StyleComponentTable/Table";
import React from "react";

const Home = () => {
  const records: any = [
    {
      id: 1,
      name: "John",
      age: 25,
      post: "Developer",
    },
  ];
  const columns: any = [
    {
      accessor: "id",
      title: "ID",
    },
    {
      accessor: "name",
      title: "Name",
    },
    {
      accessor: "id",
      title: "age",
    },
    {
      accessor: "age",
      title: "post",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-10">
      {columns.map((column: any, index: any) => (
        <div key={index}>
          <CardStyled />
        </div>
      ))}
    </div>
  );
};

export default Home;
