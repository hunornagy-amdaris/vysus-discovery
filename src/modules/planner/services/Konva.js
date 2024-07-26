import Konva from "konva";

export const setup = ({ ref, layers, elements }) => {
  const width = 800;
  const height = 600;

  const stage = new Konva.Stage({
    container: ref,
    width: width,
    height: height,
  });

  const konvaLayers = layers.map((layer) => {
    return new Konva.Layer({
      id: layer.id,
    });
  });

  elements.map((element) => {
    let konvaElement;
    switch (element.type) {
      case "rectangle":
        konvaElement = new Konva.Rect({
          x: element.x,
          y: element.y,
          width: element.width,
          height: element.height,
          fill: element.fill,
          draggable: true,
        });
        const layer = konvaLayers.find(
          (layer) => layer.attrs.id === element.layer,
        );
        layer.add(konvaElement);
        break;
      default:
        break;
    }
    return konvaElement;
  });

  konvaLayers.forEach((layer) => {
    stage.add(layer);
  });

  return stage;
};
