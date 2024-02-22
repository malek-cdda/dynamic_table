"use client";
import Card from "@/components/Card/Card";
import AvatarGroup from "@/components/Card/CardAvatarGroup";
import ProgressBar from "@/components/Card/ProgressBar";
import Table from "@/components/TableComponent/Table";
import { ActionComponent } from "@/components/utils/ActionComponant/ActionComponant";
import Image from "next/image";
import React, { useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
const TableCard = () => {
  const [toggle, setToggle] = useState(false);

  const columns = [
    {
      accessor: "id",
      // title: "ID",
    },
    {
      accessor: "title",
      title: "Title",

      render: (row: any) => (
        <div className="flex items-center gap-2">
          <Image
            width={1000}
            height={1000}
            src={row?.img}
            alt="person"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
          <div>
            <span>Redesign Layout</span>
            <div></div>
          </div>
        </div>
      ),
    },
    {
      accessor: "timeline",
      title: "Timeline",
    },
    {
      accessor: "projectteamsw",
      title: "Project Teams",
      render: (data: any) => {
        return <AvatarGroup data={data?.projectteams} />;
      },
    },
    {
      accessor: "projecttypes",
      title: "Project Type",
    },
    {
      accessor: "progress",
      title: "Progress",
      render: (row: any) => <ProgressBar row={row} />,
    },
    {
      accessor: "actions",
      title: "Actions",
      // action component field for the table
      render: (row: any) => <ActionComponent data={row} />,
    },
  ];
  const data: any = [
    {
      colums: "Redesign Layout",
      img: "/assets/Logo.svg",
      subtitl: ["Netflix", "Urgent", "4 months (Estimated)"],
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
      subtitl: ["Netflix", "Urgent", "4 months (Estimated)"],
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
      subtitl: ["Netflix", "Urgent", "4 months (Estimated)"],
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
  ];
  return (
    <div>
      <div className="flex justify-end gap-5">
        <button
          className="bg-blue-800 px-5 py-2 rounded-md"
          onClick={() => setToggle(true)}>
          Card
        </button>
        <button
          className="bg-blue-800 px-5 py-2 rounded-md"
          onClick={() => setToggle(false)}>
          Table
        </button>
      </div>
      <>
        {toggle && (
          <div className="container mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2  grid-cols-1">
            {data.map((project: any, index: any) => {
              return <Card key={index} project={project} />;
            })}
          </div>
        )}
        {!toggle && (
          <Table
            columns={columns}
            records={data}
            showSelectBox
            tableBgColor="black"
          />
        )}
      </>
    </div>
  );
};

export default TableCard;
