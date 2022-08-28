//types of Operators js 
   // Arthimatic 
   //Assignmnt
   // Comparison 
   //logical
   // BitWise


   
   //Arthimatic operator
     

   let x=10;
   let y=3;
   console.log(x+y);//addition
   console.log(x-y);//subtraction 
   console.log(x*y)//multiplication
   console.log(x/y);//divison
   console.log(x%y)//module 
   console.log(x**y)//exponestion
   console.log(x++);//increment //dedcrement

//comparsion 

let a=2;
   console.log(a>0)//true
   console.log(a>=2)//t
    console.log(a<2)//F

  //Equality
     //strict equality:which compar  value and type which assign by(===)
    const b=2;
       console.log(b===2);// T,strict equality 
       console.log(b==="2") //f ,b/c type 
    //loose equality:which checks only value and  assign it by (==)
        console.log(b==2)//true
        console.log(b=='2')//true


    //Ternary operator(conditional )

    let points=110;
    let type=points>100 ?'Golden':"Silver";
        console.log(type);
     

   //logical operator(AND ,OR)
  //AND  is f,  if atlest one f 
  //OR  is t, if atlest one true
     console.log(true && false)//f
     console.log(true||false)//t
  //Falsy(false) value are 
    //undefined
    //null
    //0
    //''
    //NaN

    //truthy:the result is true what ever we use AND or OR 
    
    console.log(false||1||2)//1  which is truthy 
    console.log(false||0||null)//null falsy
    console.log(true && 3 && 0)//falsy 


    //exercise
      //swapping the value 
  let ab='red';
  let bc ='blue';
//solution 
let c=ab;
    ab=bc;
    bc=c;
     
    
    console.log(`ab:${ab}  bc:${bc}`);

     

