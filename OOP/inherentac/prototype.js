
function Shape(color){
    this.color=color;

}

Shape.prototype.duplicate=function(){
    console.log("duplicate");
}

function Circle(radius,color){
    Shape.call(this,color);//to execute Super(Shape)class 
    this.radius=radius
}

Circle.prototype.draw=function(){
    console.log("draw the circle")
}


// extend is intermediate Function in  Inheritance
//it is  a smplefied work

//Child=>drived class
//Parent=>super(parent class)   
function extend(Child,Parent){
    Child.prototype=Object.create(Parent.prototype);//if it is we can't create new Counstractor (object) from Circle function to do that 
    Child.prototype.constractor=Child;     
    
}

//Circle.prototype=Object.create(Shape.prototype)//
   //Circle.prototype.constractor=Circle

    //example of Squre Inherted from Shap 

    function Square(size){
         this.size=size; 

         this.area=function(){
             return this.size*this.size;
         }
    }
       
      extend(Square,Shape);
     extend(Circle,Shape);

     //Overriding :which is the same method but differnet implementation
     //simply Overriding is reimplemet the method
     //Overriding method should write affter intermediate 
    Circle.prototype.duplicate=function(){
        console.log(`this is Overridding method`);
    }

      let c=new Circle(4,'red')
       c.duplicate();
    
       

       const s=new Square(10);
            s.duplicate();
            console.log(s.area())

//plyemorphism 

const shaps=[
    new Circle(),
    new Square()
]
for(let shap of shaps ){
    shap.duplicate();
}