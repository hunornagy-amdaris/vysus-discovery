"use client";
import Planner from "@/modules/planner/components/Planner";

const Page = () => {
  return (
    <section
      className={"w-[calc(100vw-50px)] ml-7 p-2 h-[80vh] bg-gray-700 rounded"}
    >
      <Planner />
    </section>
  );
};

export default Page;
