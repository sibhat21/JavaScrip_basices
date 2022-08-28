//object:which is data type and putting related data in one bundule
//Object oriented programing (OOP)

 
const circlee={
    radious:10,
    location:{
          x:2,
            y:3
        } ,

    area:function(){
        return (3.14*this.radious*this.radious);

    }
}
//we can add proprty in object

  circlee.color='blue';
  circlee.draw=function(num,x)
     {return num*x}
//factory Function //Camel notation (oneTwoThree) 
//the above object can we rewrite like 
   function createCircle(radious){
       return{
           radious,
           area(){
               return(3.14*this.radious*this.radious);
           }

       }
   }

  const circle1=createCircle(5);

console.log(circle1.area());


//constractor Function//Pascal notation (OneTwo--) 

function Circle(radious){
    this.radious=radious;
     this.draw=function(){
         return(3.14*radious*radious)
     }
}

const circle2=new Circle(10);
