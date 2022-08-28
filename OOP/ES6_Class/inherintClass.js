
//Inheritance in class
 // if supper(parent) class has constractor,then should write in drived class by calling super key words
 // drived class can have additional proporties and can mothod override
 //drived class should use extends key word
class Shape{
constractor(color){
    this.color=color;
 } 
 draw(){
  console.log("draw the Circle ",this.color)
 }
}

//inherent//drived class
class Rectangle extends Shape{
    constractor(color, width,height){
        super(color);
         this.width=width;
         this.height=height;
    }
  //additional method
  area(){
    return (this.width*this.height);
  }
  //overriding draw methods

draw(){
    console.log('this is Rectangle class');
}

}


const rg=new Rectangle('red',12,5);
 console.log(rg.area());
  rg.draw();