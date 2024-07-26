"use client";
import Sidebar from "@/modules/planner/components/sidebar/Sidebar";
import PlannerProvider from "@/modules/planner/store/provider/PlannerContext";

const Layout = ({ children }) => {
  return (
    <PlannerProvider>
      <div className={"flex gap-2 px-7"}>
        <Sidebar />
        {children}
      </div>
    </PlannerProvider>
  );
};

export default Layout;
