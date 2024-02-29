"use client";
import Card from "@/components/Card/Card";
import AvatarGroup from "@/components/Card/CardAvatarGroup";
import CardButton from "@/components/Card/CardButton";
import ProgressBar from "@/components/Card/ProgressBar";
import Table from "@/components/TableComponent/Table";
import GridTable from "@/components/TableGrid/GridTable";
import { ActionComponent } from "@/components/utils/ActionComponant/ActionComponant";
import Image from "next/image";
import React, { useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { CiGrid41 } from "react-icons/ci";
import { FaTableList } from "react-icons/fa6";
const TableCard = () => {
  const [isGrid, setIsGrid] = useState(false);
  const data: any = [
    {
      colums: "Redesign Layout",
      img: "/assets/Logo.svg",
      subtitle: ["Netflix", "Urgent", "4 months (Estimated)"],
      timeline: "20 Feb 24 - 20 Jun 24",
      projectteams: [
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
      ],
      projecttypes: "UI/UX Design",
      progress: 50,
      actions: "2",
    },
    {
      colums: "Redesign Layout",
      img: "/assets/Logo.svg",
      subtitle: ["Netflix", "Urgent", "4 months (Estimated)"],
      timeline: "20 Feb 24 - 20 Jun 24",
      projectteams: [
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
      ],
      projecttypes: "UI/UX Design",
      progress: 50,
      actions: "2",
    },
    {
      colums: "Redesign Layout",
      img: "/assets/Logo.svg",
      subtitle: ["Netflix", "Urgent", "4 months (Estimated)"],
      timeline: "30 May 24 - 20 Jun 24",
      projectteams: [
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
        "/assets/person.jpg",
      ],
      projecttypes: "UI/UX Design",
      progress: 50,
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
      // actions: (data: any) => (
      //   <>
      //     <CardButton
      //       text="Edit"
      //       btnBgColor="#333333"
      //       btnColor="#999999"
      //       btnWidth="100%"
      //       btnPadding="6px"
      //       iconHeight="16px"
      //       iconWidth="16px"
      //       showIcon={true}
      //       icon="/assets/eye.svg"
      //       iconSite="right"
      //       position="left"
      //       onClick={() => console.log("edit")}
      //     />
      //     <CardButton
      //       text="Delete"
      //       btnBgColor="#333333"
      //       btnColor="#999999"
      //       btnWidth="100%"
      //       btnPadding="6px"
      //       iconHeight="16px"
      //       iconWidth="16px"
      //       showIcon={true}
      //       icon="/assets/eye.svg"
      //       iconSite="right"
      //       position="left"
      //       onClick={() => console.log("delete")}
      //     />
      //     <CardButton
      //       text="Update"
      //       btnBgColor="#333333"
      //       btnColor="#999999"
      //       btnWidth="100%"
      //       btnPadding="6px"
      //       iconHeight="16px"
      //       iconWidth="16px"
      //       showIcon={true}
      //       icon="/assets/eye.svg"
      //       iconSite="right"
      //       position="left"
      //     />
      //   </>
      // ),
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
  return (
    <div>
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
      />
    </div>
  );
};

export default TableCard;
