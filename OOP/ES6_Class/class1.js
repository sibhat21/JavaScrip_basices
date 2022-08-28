//it is ES6(ECMA 2015)
//their are two method
  //1 instance method=>which is inctance of the class anfd an object
  //2 static method =>which is ony access by class but object 


class Employee{
    constructor(id,name){
   this.id=id;
   this.name=name;


    }
    //instace method
   getInfo(){
       return this;
   }
   //static method
   static netSalary(salary,rate){
       return (salary-salary*rate);
   }
 
}
const emp1=new Employee(12,"Getu",2000);
        //emp1.netSalary()//Error b/netSalary is static method only access by class
console.log(emp1.getInfo())

const netSalary=Employee.netSalary(2000,0.3);//only we access by directly by class
console.log(netSalary)


//to generate random numbers of  caracter
const value = new Array(30).join('abd');
console.log(value);

