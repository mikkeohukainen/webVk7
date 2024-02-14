export class Shape {
    _x
    _y
    _lineWidth
    _color

    constructor(x, y, _lineWidth = 1) {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
    }

    set lineWidth(w) {
        this._lineWidth = w
    }

    set color(c) {
        this._color = c
    }
}