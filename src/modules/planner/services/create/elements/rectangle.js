import Konva from "konva";

export const createRectangle = (x = 150, y = 40, width = 100, height = 50) => {
  return new Konva.Rect({
    x,
    y,
    width,
    height,
    fill: "red",
    shadowBlur: 10,
    cornerRadius: 10,
    draggable: true,
  });
};
