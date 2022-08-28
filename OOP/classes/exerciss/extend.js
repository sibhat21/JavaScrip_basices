

    class Employee{
        constructor(name,id,salary){
            this.name=name;
            this.id=id;
            this.salary=salary;
        }
        getSalary(){
            return  (this.salary-this.salary*0.3)
        }
    }

    class Person extends Employee{
        constructor(name,id,salary,age){
            super(name,id,salary);
            this.age=age
        }

       toString(){
           return this;
       }
       getSalary(){
           return`this is overriding class `
       }
    }

    const emp=new Person("Getu",123,1234,34);
      console.log(emp.toString());
        console.log(emp.getSalart());


            const _color=Symbol();

        class Shap{
            constructor(color){
              this[_color]=color;
        }

    }

        const shap=new Shap("red"); 
               
               console.log(Object.getOwnPropertyNames(shap))
         