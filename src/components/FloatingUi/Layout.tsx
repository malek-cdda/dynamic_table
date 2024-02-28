"use client";
import React, { useEffect } from "react";
import { getFloatingTargetElementLayout } from "./utils";

const FloatingLayout = ({
  children,
  tooltipTargetDiv,
  place = "bottom",
}: any) => {
  useEffect(() => {
    const button = document.querySelector("#button") as any;
    console.log(button);
    const tooltip = document.querySelector("#tooltip") as any;
    // const arrowElement = document.querySelector('#arrow');
    getFloatingTargetElementLayout(place, button, tooltip);
  }, [place, tooltipTargetDiv]);
  return (
    <div>
      <div id="button" aria-describedby="tooltip" className="w-[80%]">
        {children}
      </div>
      <div id="tooltip" role="tooltip">
        {tooltipTargetDiv}
      </div>
    </div>
  );
};

export default FloatingLayout;
