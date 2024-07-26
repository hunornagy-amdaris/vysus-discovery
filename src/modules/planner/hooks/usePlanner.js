import { useEffect, useRef, useState } from "react";
import { setup } from "@/modules/planner/services/Konva";
import { usePlannerData } from "@/modules/planner/hooks/usePlannerData";

export const usePlanner = () => {
  const [konva, setKonva] = useState({});

  const konvaRef = useRef();

  const { elements, layers } = usePlannerData();
  useEffect(() => {
    if (konvaRef.current) {
      const localKonva = setup({ ref: konvaRef.current, layers, elements });
      setKonva(localKonva);
    }
  }, [konvaRef.current, elements, layers]);

  return {
    konvaRef,
    konva,
  };
};
