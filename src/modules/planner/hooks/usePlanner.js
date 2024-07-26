import { useEffect, useRef, useState } from "react";
import { setup } from "@/modules/planner/services/Konva";
import { usePlannerData } from "@/modules/planner/hooks/usePlannerData";
import { usePlannerActions } from "@/modules/planner/hooks/usePlannerActions";

export const usePlanner = () => {
  const [konva, setKonva] = useState({});

  const konvaRef = useRef();

  const { elements, layers, canvas } = usePlannerData();
  const { editElement, updateCanvas } = usePlannerActions();
  useEffect(() => {
    if (konvaRef.current && editElement && canvas) {
      const localKonva = setup({
        ref: konvaRef.current,
        layers,
        elements,
        editElement,
        updateCanvas,
        options: {
          ...canvas,
        },
      });
      setKonva(localKonva);
    }
  }, [konvaRef.current, elements, layers]);

  return {
    konvaRef,
    konva,
  };
};
