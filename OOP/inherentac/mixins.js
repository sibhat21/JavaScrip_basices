
//composition:=>which inherinted ony what we wanted(selective)
//rest operator which use for unspecified parameter
function mixin(target,...sourse){
    Object.assign(target.prototype,...sourse);//spread operator=>No of passing arguments
}


const canEat={
    eat:function(){
        this.hunger--;
        console.logg('can eat')
    }
};

const canWalk={

    walk:function(){
        console.log('Can walk')
    }
};

const canSwim={
    
    swim:function(){
        console.log('can Swim')
    }
}

//to combine those object  based on its beheviours
  //copying by Object assign methode
  function Person(){ 
  }
  //Object.assign(Person.prototype,canEat,canWalk,canEat);//prrson can eat,swim and walk
mixin(Person,canEat,canWalk,canSwim);
  const person=new Person();//which inherited waht we wanted only
  console.log(person);

  function Goldfish(){
  }

  //Object.assign(Goldfish.prototype.canEat,canSwim);//which replace by mixin function
  mixin(Goldfish,canEat,canSwim)
    const goldfish=new Goldfish();//can swim and can eat  but not walk,so only inherited seat and swim
     console.log(goldFish)

     //Generally we can do it my creating mixin function 
