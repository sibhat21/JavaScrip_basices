// data type 
//primitive-type/value type:
    //String
    //number
    //null/undefind
    //Boolean
//Refernce/object type:
   // object-type/ Array Type
   //symbol /flag
   //function 
    


   //primitive  Type
   let name ="Getu";
   let age=34;
   let isApproved=true;  
   let fistName=undefined;
    let selectedColor=null;
     
    //oject type /reference type
    const array=[1,2,3]
    const person={name:"getu",
                   id:123
                 };          

//object accessing by dot notation and bracket notation
  person.name="Safu"
  person['name']='Asorga'
  //js is dynamic data Type(we can change the value but should data type be let)
  let lastName="getu";
         lastName=34;

console.log(lastName);

//function:
 //func is a fundamental bulding block of js
 //basicaly  it is the set of statement which perform (excute) a task

function greet(name){
     return `Hello ${name}`;
 }

 console.log(greet("Getu"));


 //type of function 
   //expression /anonumys 
   //declarative function