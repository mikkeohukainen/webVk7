import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
    #width
    #height

    constructor(x, y, w, h) {
        super(x, y)
        this.#width = w
        this.#height = h
    }

    draw(ctx) {
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.strokeRect(this._x, this._y, this.#width, this.#height)
    }
}