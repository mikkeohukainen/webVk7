import { Rectangle } from "./Rectangle.js";

export class Square extends Rectangle {

    constructor(x, y, w) {
        super(x, y, w, w)
    }
}
