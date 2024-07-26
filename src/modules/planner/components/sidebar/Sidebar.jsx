import React from "react";
import { usePlannerActions } from "@/modules/planner/hooks/usePlannerActions";
import { usePlannerData } from "@/modules/planner/hooks/usePlannerData";

const Sidebar = () => {
  const { addElement, deleteElement } = usePlannerActions();

  const { elements } = usePlannerData();

  return (
    <aside
      className={"w-[300px] h-[80vh] bg-gray-700 rounded p-3 text-gray-400"}
    >
      <div className={"h-[500px] bg-gray-600"}>
        <h3 className={"pl-2 pt-2"}>Elements</h3>

        <div className={"pl-2 flex flex-col gap-2"}>
          {elements.map((element) => (
            <div key={element.id} className={"flex items-center"}>
              <div
                className={"w-4 h-4 bg-red-500 mr-2"}
                style={{ backgroundColor: element.fill }}
              ></div>
              <span>{element.type}</span>
              <button
                className={"px-2 py-1 bg-red-500 rounded text-white ml-2"}
                onClick={() => deleteElement({ id: element.id })}
              >
                Delete
              </button>
            </div>
          ))}
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
                id: Math.random().toString(36).substr(2, 9),
              });
            }}
          >
            Add rectangle
          </button>

          <button
            className={"px-2 py-1 bg-emerald-500 rounded text-white mt-3"}
            onClick={() => {
              addElement({
                layer: "layer1",
                type: "ellipse",
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: "green",
                id: Math.random().toString(36).substr(2, 9),
              });
            }}
          >
            Add ellipse
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
