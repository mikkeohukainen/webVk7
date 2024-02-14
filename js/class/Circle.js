import { Shape } from "./Shape.js";

export class Circle extends Shape {
    #radius

    constructor(x, y, r) {
        super(x, y)
        this.#radius = r
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this._x, this._y, this.#radius, 0, 2 * Math.PI)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}