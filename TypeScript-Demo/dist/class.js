"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    //   private x: number;//private
    //   y: number;//public
    //to make parameter optional
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //     this.x = x;
        //     this.y = y;
    }
    draw() {
        console.log("x " + this.x, "y " + this.y);
    }
    getX() {
        return this.x;
    }
    setX(value) {
        if (value <= 0)
            throw new Error("value cannot be less than 0.");
        this.x = value;
    }
}
let point = new Point(30, 20);
point.setX(10);
point.draw();
console.log(point.getX());
