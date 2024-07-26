import Konva from "konva";

import { BackLayerRender } from "@/modules/planner/services/grid/backLayer";

export const setup = ({
  ref,
  layers,
  elements,
  editElement,
  updateCanvas = () => {},
  options = {},
}) => {
  const width = options.width || 1280;
  const height = options.height || 800;
  const initialPosition = options.position || { x: 0, y: 0 };
  const initialScale = options.scale || 1;
  let backLayer;
  let backLayerRender;

  const stage = new Konva.Stage({
    container: ref,
    width: width,
    height: height,
    draggable: true,
    x: initialPosition.x,
    y: initialPosition.y,
    scaleX: initialScale,
    scaleY: initialScale,
  });

  const konvaLayers = layers.map((layer) => {
    return new Konva.Layer({
      id: layer.id,
    });
  });

  initBackLayer(width, height);

  function initBackLayer(width, height) {
    backLayer = new Konva.Layer();
    backLayer.listening(false);
    backLayerRender = new BackLayerRender(backLayer);
    backLayerRender.renderGrid(width, height);
    stage.add(backLayer);
  }

  elements.forEach((element) => {
    let konvaElement;
    const layer = konvaLayers.find((layer) => layer.attrs.id === element.layer);
    // Transform element position based on current stage transformation
    const transformedPosition = stage
      .getTransform()
      .point({ x: element.x, y: element.y });
    switch (element.type) {
      case "rectangle":
        konvaElement = new Konva.Rect({
          x: transformedPosition.x,
          y: transformedPosition.y,
          width: element.width,
          height: element.height,
          fill: element.fill,
          draggable: true,
        });
        break;

      case "ellipse":
        konvaElement = new Konva.Ellipse({
          x: transformedPosition.x,
          y: transformedPosition.y,
          width: element.width,
          height: element.height,
          fill: element.fill,
          draggable: true,
        });

        break;

      default:
        break;
    }

    konvaElement.on("dragend", (e) => {
      editElement({
        id: element.id,
        x: e.target.x(),
        y: e.target.y(),
      });
    });
    layer.add(konvaElement);
  });

  konvaLayers.forEach((layer) => {
    stage.add(layer);
  });

  stage.on("dragend", (e) => {
    const position = stage.position();
    backLayerRender.updateGrid(width, height, position.x, position.y);
    updateCanvas({
      position: {
        x: position.x,

        y: position.y,
      },
      scale: stage.scaleX(),
    });
  });

  // Zoom functionality

  stage.on("wheel", (e) => {
    e.evt.preventDefault();
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };
    const newScale = e.evt.deltaY > 0 ? oldScale * 1.1 : oldScale / 1.1;
    stage.scale({ x: newScale, y: newScale });
    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    stage.position(newPos);
    stage.batchDraw();
    // Update the grid after scaling
    const position = stage.position();
    backLayerRender.updateGrid(width, height, position.x, position.y);

    // Update the canvas with the new scale and position
    updateCanvas({
      position: {
        x: position.x,
        y: position.y,
      },
      scale: newScale,
    });
  });

  // Maintain stage position and scale on element actions

  const maintainStagePosition = () => {
    const position = stage.position();
    const scale = stage.scaleX();
    updateCanvas({
      position: {
        x: position.x,
        y: position.y,
      },
      scale: scale,
    });
  };

  elements.forEach((element) => {
    const konvaElement = stage.findOne(`#${element.id}`);
    if (konvaElement) {
      konvaElement.on("dragend", maintainStagePosition);
      konvaElement.on("dragmove", maintainStagePosition);
    }
  });

  // Ensure elements are not affecting the stage position/scale

  konvaLayers.forEach((layer) => {
    layer.on("dragmove", maintainStagePosition);
    layer.on("dragend", maintainStagePosition);
  });

  return stage;
};
