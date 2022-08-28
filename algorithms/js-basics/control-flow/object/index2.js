
//object is dynamic 
const circle={
    radius:5

};

   circle.color='Blue';
   circle.area=function(){
        return 3.14*this.radius*this.radius;
   }


   console.log(circle.area());
   console.log(circle.color);

   //we can delet proporties 

    delete circle.color;
    delete circle.area();