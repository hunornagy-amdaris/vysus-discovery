import { useContext } from "react";
import { PlannerContext } from "@/modules/planner/store/provider/PlannerContext";

export const usePlannerData = () => useContext(PlannerContext);
