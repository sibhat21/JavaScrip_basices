


//in Js, we don't have real class but object
//prototype is a parent of another(drived/child)object
//A prototype (parent)is just a regular object 
//every object has prototype execpt base(root)object
//Objects Created by a given constractor will have the prototype


 
const person={
    name:"Mosh"
};


Object.defineProperty(person,'name',{
     writable:false,//only reading
    enumerable:false,//prevent show the property
    configurable:false//prevent deletion
})


  person.name="John"
  console.log(Object.keys(person))
  console.log(person);


  //  Prototye vs instance Memebers

  function Circle(radius){
      this.radius=radius;//both radius and draw are instance members
      this.draw=function(){
          console.log("darw");;
      }
  }


    Circle.prototype.toString=function(){   //prototype memebers
        return 'Circle with radius'+this.radius;
    }

    const c1=new Circle(1);//both instance and prototype memebers are members of all object which created from base class(object)Circle
           c1.radius;
            console.log(c1.toString());
            c1.draw();


            //iterating Instance and Prototype members
             //object keys method which return only instance memebers

        let key=Object.keys(c1);//only ['radius','draw'];
        console.log(key)

        //for in method return both propertis
        let allkey=[]
        for(let key in c1){
            allkey.push(key)//radius,draw and toString
        }
        console.log(allkey)
         