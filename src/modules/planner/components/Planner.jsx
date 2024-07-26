"use client";

import { usePlanner } from "@/modules/planner/hooks/usePlanner";

const Planner = () => {
  const { konvaRef } = usePlanner();

  return (
    <section
      ref={konvaRef}
      className={
        "w-[80% h-[100%] bg-gray-600 flex justify-center items-center overflow-scroll"
      }
    ></section>
  );
};

export default Planner;
