import Card from "@/components/Card/Card";
import React from "react";

const Home = () => {
  const data = [
    {
      id: 1,
      img: "/assets/person.jpg",
      author: "Abul Hasem",
      name: "Role",
      inputs: 1,
      db: "mongodb",
      crud: false,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 2,
      img: "/assets/person.jpg",
      author: "Sunny",
      name: "Permission",
      inputs: 2,
      db: "postgres",
      crud: true,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
    {
      id: 2,
      img: "/assets/person.jpg",
      author: "Sunny",
      name: "Permission",
      inputs: 2,
      db: "postgres",
      crud: true,
      ws: true,
      inMemory: true,
      relation: ["Role", "Permission", "+2"],
      status: true,
      action: true,
    },
  ];
  return (
    <div className="w-full   mx-auto ">
      <div className=" w-full grid grid-cols-3 gap-4  ">
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
