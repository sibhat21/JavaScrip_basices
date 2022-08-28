

//Q2.Write a recursive function that returns true 
   //if a string is a palindrome, otherwise false.


   function isPaladirome(str){
       if(str.length===0)return true;

       if(str[0]!==str[str.length-1]){
           return false;
       }

       return isPaladirome(str.substring(1,str.length-2));

   }

   console.log(isPaladirome("mam"));