"use client";
import Floating from "@/components/FloatingUi/Floating";
import FloatingLayout from "@/components/FloatingUi/Layout";
import { Table } from "@/components/StyleComponentTable/StyleComponent";
import React from "react";

const Home = () => {
  const data = [
    {
      id: 21,
      name: "John",
      age: 25,
    },
    {
      id: 22,
      name: "Doe",
      age: 26,
    },
    {
      id: 22,
      name: "Doe",
      age: 26,
    },
  ];
  const columns = [
    {
      accessor: "id",
      title: "ID",
    },
    {
      accessor: "name",
      title: "Name",
      card: {
        title: "name",
        options: {
          position: "top",
          follow: "bottom",
        },
        // render: (row: any) => <div>welcome</div>,
      },
    },
    {
      accessor: "age",
      title: "Age",
      card: {
        title: "name",
        accessor: "age",
        options: {
          position: "top",
          follow: "bottom",
        },
        // render: (row: any) => <div>welcome</div>,
      },
    },
  ];
  const cardObject = {
    title: "name",
    subtitle: "age",
  };
  return (
    <div>
      <div>
        <>
          {data?.map((dataItem, index) => (
            <div key={index} className="bg-red-900 m-5">
              {/*  check item.card.title and dataItem object key is matched or not */}

              <div>{dataItem[cardObject?.title]}</div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Home;
