import React from "react";
import { usePlannerActions } from "@/modules/planner/hooks/usePlannerActions";

const Sidebar = () => {
  const { addElement } = usePlannerActions();

  return (
    <aside
      className={"w-[300px] h-[80vh] bg-gray-700 rounded p-3 text-gray-400"}
    >
      <div className={"h-[500px] bg-gray-600"}>
        <h3 className={"pl-2 pt-2"}>Elements</h3>

        <div className={"pl-2"}>
          <button
            className={"px-2 py-1 bg-emerald-500 rounded text-white mt-3"}
            onClick={() => {
              addElement({
                layer: "layer1",
                type: "rectangle",
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: "red",
              });
            }}
          >
            Add rectangle
          </button>
        </div>
      </div>
      <hr className={"my-3 border-gray-600"} />
      <div className={"h-[300px] bg-gray-600"}>
        <h3 className={"pl-2 pt-2"}>Layers</h3>
      </div>
      <hr className={"my-3 border-gray-600"} />
      <h3>Upload image</h3>
      <button className={"px-2 py-1 bg-emerald-500 rounded text-white mt-3"}>
        Upload
      </button>
      <hr className={"my-3 border-gray-600"} />
      <h3>Use map</h3>
      <button className={"px-2 py-1 bg-emerald-500 rounded text-white mt-3"}>
        Load map
      </button>
    </aside>
  );
};

export default Sidebar;
