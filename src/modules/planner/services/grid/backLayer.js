/*
 * BackLayer render of infinitely whiteboard
 */
export class BackLayerRender {
  constructor(layer) {
    this.currentX = -120;
    this.currentY = -120;
    this.width = 0;
    this.height = 0;
    this.step = 60;
    this.layer = layer;
    this.points = new Map();
  }

  /*
   * Draw new points
   */
  updateGrid(width, height, x, y) {
    const position = this.getLayerPoint(x, y);

    if (position.x < 0) {
      width = width + -position.x;
    }
    if (position.y < 0) {
      height = height + -position.y;
    }

    const newx = -position.x;
    const newy = -position.y;
    const newShapes = [];
    for (let y = newy; y < height; y = y + this.step) {
      for (let x = newx; x < width; x = x + this.step) {
        if (!this.points.has(x.toString() + y.toString())) {
          const rect = this.createRect(x, y);
          rect.listening(false);
          rect.perfectDrawEnabled(false);
          rect.shadowForStrokeEnabled(false);
          rect.hitStrokeWidth(0);
          newShapes.push(rect);
          this.points.set(x.toString() + y.toString(), rect);
        }
      }
    }
    if (newShapes.length > 0) {
      this.layer.add(...newShapes);
    }
  }

  /*
   * Render start points
   */
  renderGrid(width, height) {
    const position = this.getLayerPoint(this.currentX, this.currentY);
    for (let y = position.y; y < height; y = y + this.step) {
      for (let x = position.x; x < width + 200; x = x + this.step) {
        const rect = this.createRect(x, y);
        rect.listening(false);
        rect.perfectDrawEnabled(false);
        rect.shadowForStrokeEnabled(false);
        rect.hitStrokeWidth(0);
        this.points.set(x.toString() + y.toString(), rect);
        this.layer.add(rect);
      }
    }
    this.layer.draw();
  }

  createRect(x, y) {
    return new Konva.Rect({
      x: x,
      y: y,
      width: this.step,
      height: this.step,
      stroke: "#e2e2ea",
      strokeWidth: 1,
      lineCap: "round",
      lineJoin: "round",
    });
  }

  /*
   * Smooth math for point,
   */
  getLayerPoint(x, y) {
    let nextx = x;
    let nexty = y;

    while (Math.round(nextx) % this.step !== 0) {
      nextx++;
    }
    while (Math.round(nexty) % this.step !== 0) {
      nexty++;
    }

    return { x: Math.round(nextx), y: Math.round(nexty) };
  }
}
