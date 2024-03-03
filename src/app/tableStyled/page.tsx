"use client";

import {
  CardCounting,
  CardFollowing,
  CardHeader,
  CardHeaderSubtitle,
  CardHeaderTitle,
  CardHeaderWrapper,
  CardLeftArea,
  CardPosition,
} from "@/components/StyledComponent/Card/StyledComponent";
import GridTable from "@/components/StyledComponent/GridTable/GridTable";
import {
  GridTableAllButton,
  GridTableLeftWrapper,
  GridTableSearchArea,
  GridTableSearchField,
  GridTableTextWrapperSubtitle,
  GridTableTextWrapperTitle,
  GridTableViewWrapperArea,
  GridTableWrapper,
} from "@/components/StyledComponent/GridTable/styledComponents";
import TableComponent from "@/components/StyledComponent/Table/Table";
import { handlePageChanges } from "@/components/StyledComponent/utils/utils";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaTableList } from "react-icons/fa6";

const Home = () => {
  const data: any = [
    {
      id: 1,
      title: "Redesign Layout",
      image: "/assets/Logo.svg",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "UI/UX Design",
      progress: 80,
    },
    {
      id: 2,
      title: "Redesign",
      image: "/assets/Logo.svg",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "UI/UX Design",
      progress: 20,
    },
    {
      id: 3,
      title: "Login & Sign Up",
      image: "/assets/Logo.svg",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "User Map",
      progress: 40,
    },
    {
      id: 4,
      title: "Develop Platform",
      image: "/assets/Logo.svg",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "User Interstation",
      progress: 80,
    },
    {
      id: 5,
      title: "Redesign Layout",
      image: "/assets/Logo.svg",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "UI/UX Design",
      progress: 80,
    },
    {
      id: 6,
      title: "Redesign",
      image: "/assets/Logo.svg",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "UI/UX Design",
      progress: 20,
    },
    {
      id: 7,
      title: "Login & Sign Up",
      image: "/assets/profile.png",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "User Map",
      progress: 40,
    },
    {
      id: 8,
      title: "Develop Platform",
      image: "/assets/Logo.svg",
      projectName: "Netflix",
      status: "Urgent",
      timeline: "20 Feb 24 - 20 Jun 24",
      teams: [
        { image: "/assets/person.jpg", name: "John Doe" },
        { image: "/assets/person.jpg", name: "Alex" },
        { image: "/assets/person.jpg", name: "Ovi" },
      ],
      type: "User Interstation",
      progress: 80,
    },
  ];

  const dataAccessor = {
    card: {
      title: "title",
      img: "image",
      subtitle: "subtitle",
      timeline: "timeline",
      projectteams: "projectteams",
      projecttypes: "projecttypes",
      progress: "progress",
      options: {
        actionBtn: "top",
      },
      // actions: (data: any) => <></>,
    },
    table: [
      {
        accessor: "id",
        title: "ID",
      },
      {
        accessor: "title",
        title: "Title",
        sortable: true,
        render: (row: any) => (
          <>
            <CardHeaderWrapper>
              <CardHeader>
                <CardLeftArea>
                  <Image
                    src="/assets/profile.png"
                    alt=""
                    width={1000}
                    height={1000}></Image>
                </CardLeftArea>
                <div>
                  <CardHeaderTitle>{row.colums}</CardHeaderTitle>
                  <CardHeaderSubtitle>
                    <CardPosition>
                      <span className="position_1">dd</span>
                      <span className="position_2"> </span>
                    </CardPosition>
                    <CardCounting>
                      {/* <image src="/assets/stopwatch.svg" alt="stopwatch" /> */}
                      <span className="counting_1"> </span>
                      <span className="counting_2"> </span>
                    </CardCounting>
                    <CardFollowing>
                      <Image
                        src="/assets/clock.svg"
                        width={1000}
                        height={1000}
                        alt=""
                      />
                      sdf
                    </CardFollowing>
                  </CardHeaderSubtitle>
                </div>
              </CardHeader>
            </CardHeaderWrapper>
          </>
        ),
      },
      {
        accessor: "timeline",
        title: "Timeline",
        sortable: true,
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
        sortable: true,
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
  const [limits, setLimits] = useState<number>(10);
  const [newData, setNewData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const totalPage = Math.ceil(data?.length / limits);
  // data set in the front end pagination and show the data
  useEffect(() => {
    let newDataArray: any = [];
    for (let i = (page - 1) * limits; i < page * limits; i++) {
      if (data[i]) {
        newDataArray.push(data[i]);
      }
    }
    setNewData(newDataArray);
  }, [limits, page]);

  const handlePageChange = (pageNumber: number | string) => {
    handlePageChanges(page, totalPage, pageNumber, setPage);
  };
  const handleRowShowValue = (e: any) => {
    setLimits(e);
  };
  const onToggleItem = (toggleItem: any) => {
    console.log(toggleItem);
  };
  const defaultRowRender = (data: any) => {
    console.log(data);
  };

  const renderHeader = () => {
    return (
      <GridTableLeftWrapper>
        <div
          style={{
            width: "100%",
          }}>
          <GridTableTextWrapperTitle>Project List</GridTableTextWrapperTitle>
          <GridTableTextWrapperSubtitle>
            The Project List compiles critical tasks, orchestrating a seamless
            project management.
          </GridTableTextWrapperSubtitle>
        </div>
        <GridTableSearchArea>
          <GridTableSearchField type="search" placeholder="search" />
          <GridTableAllButton>
            <Image src="/assets/add.svg" width={20} height={20} alt="" />
            <span> Add New</span>
          </GridTableAllButton>
        </GridTableSearchArea>
      </GridTableLeftWrapper>
    );
  };

  return (
    <>
      <GridTable
        data={newData} // rowdata of the table
        dataAccessor={dataAccessor} // data accessor of the table
        // action button position
        // handleShowActionBtn={handleShowActionBtn}
        // showActionBtn={showActionBtn}
        // handlePageChange={handlePageChange}
        // page={page} // page number
        // limits={limits} // limits of data
        // totalPage={totalPage} // total page number
        // handleRowShowValue={handleRowShowValue} // handle row show value function
        // showSelectBox={false} // selectbox showing or not
        // tableHeaderShow={true} // table header showing or not
        // onToggleItem={onToggleItem} // toggle item function
        isGridList={true} // header showing or not
        renderHeader={renderHeader} // render header function
        // defaultRowRender={defaultRowRender} // default row render function
        // isPagination={true} // pagination showing or not
      />
    </>
  );
};

export default Home;
