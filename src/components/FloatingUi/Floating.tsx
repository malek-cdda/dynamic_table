"use client";
import React, { useEffect } from "react";
import { getFloatingTargetElementLayout } from "./utils";

const Floating = ({ baseChild, targetChild, place = "left" }: any) => {
  useEffect(() => {
    const button = document.querySelector("#button") as any;
    const tooltip = document.querySelector("#tooltip") as any;
    // const arrowElement = document.querySelector('#arrow');
    getFloatingTargetElementLayout("bottom", button, tooltip);
  }, [place]);

  return (
    <div className="bg-gray-300">
      <div id="button" aria-describedby="tooltip">
        {baseChild}
      </div>
      <div id="tooltip" role="tooltip" className="hidden">
        {targetChild}
      </div>
    </div>
  );
};

export default Floating;
