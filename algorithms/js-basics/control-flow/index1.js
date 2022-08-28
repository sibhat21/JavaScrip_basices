

// in js there are two codtional statments
  // if--else
 //switch --case

 
 let isApproved="Getu";
 if(isApproved){
     console.log("the name is correct")
  }else {
      console.log('name is  false');
  }



  //switch
  let grade=3 ;
   let message;
   switch(grade){
        case 4:
        message="best grade A";
            break;
        case 3:
           message="good grade B!"
              break;
        case 2:
            message='enough C';
              break;
      default:
      message="the student grade is unsatisfactory";
      
   }

   console.log(message);



   // loops
     //for..in/for --of  loops
     //While loop/do ---while loops

   for(let i=0;i<5;i++){
       if(i%2==0)
       console.log(i);
   }


   //while loop
   let j=0;
   while(j<5){
       console.log("hello world");
       j++;
   }


  console.log("do----while loop")
   //do--while loop
       do{
     
        console.log(j)
         j++
          }while(j<5);
        



          //for--in

      const person={name:"getu",id:12};
      for(let key in person){
          console.log(key,person[key]);
      }
         
      
      const colors=['red','green','blue'];
      for(let index in colors){
        console.log(index,colors[index])
      }

      //or
      for(let value of colors){
          console.log(value);
      }

      //break and continue key words
      let k=0;
    
      while(k<10){
          if(k%2==0){
              k++
              continue;
          }
          console.log(k)//only print odd
          //to stop 
          if(k==5){ break};//which block the conde
          k++
        
      }