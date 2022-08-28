


//abstraction:Hide the details and show the essential
  //to make hide the essential part,replacing this key word by let/const which is call making private 
  //accessing this by from object properties(public)
//closure:determain the variable accessability in inner function 
//scope:the varible acc 
function Bank(name){
this.name=name;
let transaction=[];

   this.setAmount=function(typeOftrascation,amount){
    if(typeOftrascation=="saving"){
        let money=amount 
        transaction.push(money);
    } 
    if(typeOftrascation=='withdrowal'){
        let value=-1*amount;
        transaction.push(value);
    }

},
  this.getAount=function(){
    return transaction.reduce((a,b)=>a+b,0);
}


}

const bank=new Bank("Capital One");
  bank.setAmount('saving',200);
  bank.setAmount('saving',500);
  bank.setAmount('withdrowal',300);
  bank.setAmount('saving',200)
  console.log(bank.getAount());
  bank.age={x:34};//adding object
  //delete bank.age//removing  properties
console.log(bank.age);

