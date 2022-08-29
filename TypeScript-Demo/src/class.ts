export {};

class Point {
  //   private x: number;//private
  //   y: number;//public
  //to make parameter optional
  constructor(private x?: number, public y?: number) {
    //     this.x = x;
    //     this.y = y;
  }
  draw() {
    console.log("x " + this.x, "y " + this.y);
  }
  getX() {
    return this.x;
  }
  setX(value:any) {
    if (value <= 0) throw new Error("value cannot be less than 0.");
    this.x = value;
  }
}

let point = new Point(30, 20);
point.setX(10)

point.draw();
console.log(point.getX())
