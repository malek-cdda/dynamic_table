"use client";
import { useEffect, useState } from "react";

import style from "./style.module.css";

const Home = () => {
  const [theme, setTheme] = useState<boolean | null>(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        window.matchMedia("(prefers-color-scheme: light)").matches
          ? setTheme(false)
          : setTheme(true)
      );
    }
  }, []);
  console.log(theme);
  return (
    <div
      className={`${style.main_loader} ${
        theme ? style.main_loader_1 : style.main_loader_2
      }`}>
      <div
        className={`${style.circle_loader} ${
          theme ? style.circle_loader_1 : style.circle_loader_2
        }`}></div>
    </div>
  );
};

export default Home;
