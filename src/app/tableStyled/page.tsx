"use client";

import CardButton from "@/components/Card/CardButton";
import CardComponent from "@/components/StyledComponent/Card/Card";
import GridTable from "@/components/StyledComponent/GridTable/GridTable";
import TableComponent from "@/components/StyledComponent/Table/Table";
import Image from "next/image";
import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaTableList } from "react-icons/fa6";

const Home = () => {
  const [isGrid, setIsGrid] = useState(false);

  const data: any = [
    {
      id: 1,
      colums: "Redesign Layout",
      img: "/assets/Logo.svg",
      subtitle: ["Netflix", "Urgent", "4 months (Estimated)"],
      timeline: "20 Feb 24 - 20 Jun 24",
      projectteams: [
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
      ],
      projecttypes: "UI/UX Design",
      // progress: 80,
      actions: "2",
    },
    {
      id: 2,
      colums: "Admin Layout",
      img: "/assets/Logo.svg",
      subtitle: ["Netflix", "Urgent", "4 months (Estimated)"],
      timeline: "20 Feb 24 - 20 Jun 24",
      projectteams: [
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
      ],
      projecttypes: "UI/UX Design",
      progress: 50,
      actions: "2",
    },
    {
      id: 3,
      colums: "User Layout",
      img: "/assets/Logo.svg",
      subtitle: ["Netflix", "Urgent", "4 months (Estimated)"],
      timeline: "30 May 24 - 20 Jun 24",
      projectteams: ["/assets/person.jpg", "/assets/person.jpg "],
      projecttypes: "UI/UX Design",
      progress: 20,
      actions: "1",
    },
  ];

  const dataAccessor = {
    card: {
      title: "colums",
      img: "img",
      subtitle: "subtitle",
      timeline: "timeline",
      projectteams: "projectteams",
      projecttypes: "projecttypes",
      progress: "progress",
      actions: (data: any) => (
        <>
          <CardButton
            text="Edit"
            btnBgColor="#333333"
            btnColor="#999999"
            btnWidth="100%"
            btnPadding="6px"
            iconHeight="16px"
            iconWidth="16px"
            showIcon={true}
            icon="/assets/eye.svg"
            iconSite="right"
            position="left"
            onClick={() => console.log("edit")}
          />
          <CardButton
            text="Delete"
            btnBgColor="#333333"
            btnColor="#999999"
            btnWidth="100%"
            btnPadding="6px"
            iconHeight="16px"
            iconWidth="16px"
            showIcon={true}
            icon="/assets/eye.svg"
            iconSite="right"
            position="left"
            onClick={() => console.log("delete")}
          />
          <CardButton
            text="Update"
            btnBgColor="#333333"
            btnColor="#999999"
            btnWidth="100%"
            btnPadding="6px"
            iconHeight="16px"
            iconWidth="16px"
            showIcon={true}
            icon="/assets/eye.svg"
            iconSite="right"
            position="left"
          />
        </>
      ),
    },
    table: [
      {
        accessor: "id",
        title: "ID",
      },
      {
        accessor: "title",
        title: "Title",
        render: (row: any) => (
          <Image
            width={1000}
            height={1000}
            src={row?.img}
            alt="person"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
        ),
      },
      {
        accessor: "timeline",
        title: "Timeline",
      },
      {
        accessor: "projectteamsw",
        title: "Project Teams",
      },
      {
        accessor: "projecttypes",
        title: "Project Type",
      },
      {
        accessor: "progress",
        title: "Progress",
      },
      {
        accessor: "actions",
        title: "Actions",
      },
    ],
  };
  const [showActionBtn, setShowActionBtn] = useState<any>(null);
  const handleShowActionBtn = (id: any) => {
    if (showActionBtn === id) {
      setShowActionBtn(null);
    } else {
      setShowActionBtn(id);
    }
  };
  return (
    <>
      {/* <div className="grid grid-cols-3 gap-10">
        {columns.map((column: any, index: any) => (
          <div key={index}>
            <CardComponent />
          </div>
        ))}
      </div>
      <TableComponent records={records} columns={columns} /> */}
      <div className="flex justify-end gap-5">
        <button
          className="bg-blue-800 px-5 py-2 rounded-md"
          onClick={() => setIsGrid(true)}>
          <CiGrid41 />
        </button>
        <button
          className="bg-blue-800 px-5 py-2 rounded-md"
          onClick={() => setIsGrid(false)}>
          <FaTableList />
        </button>
      </div>
      <GridTable
        data={data}
        dataAccessor={dataAccessor}
        isGrid={isGrid}
        actionButtonPosition="top"
        handleShowActionBtn={handleShowActionBtn}
        showActionBtn={showActionBtn}
      />
    </>
  );
};

export default Home;
