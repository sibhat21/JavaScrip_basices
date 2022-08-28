/**
 * 9. Write a function ‘makeWithdraw’ which returns a function that keeps track of bank accounts.
a-) makeWithdraw should return a closure that has a private variable to keep an array of
bankAccount objects.
b-) Each object in the array has properties: name, savingAccountBalance and
checkingAccountBalance.
c-) When you call the closure, ‘makeWithdraw’, with the name and withdrawal amount it
will withdraw the money from the account according to the rules below:
-If checking account has enough balance, deduct the money from checking account.
-If checking account does not have enough balance, deduct all the money from checking
account then try to deduct the rest of the money from savings account.
-If neither checking account nor savings account has enough balance return an error
 */

function makewithdraw(){
    let account=[];

    return  function(name,amount){
          let ownerName=account.find(item=>item.name==name);
          if(ownerName){
              for(let i=0;i<account.length;i++){
                  if(account[i].ckeckingAccount>amount){
                       account[i].ckeckingAccount-=amount
                     }else if(account[i].ckeckingAccount+account[i].savingAccount>amount){
                            account[i].savingAccount=account[i].savingAccount+account[i].ckeckingAccount;
                               account[i].savingAccount-=amount;
                         } else{
                             return `the  account has not enough money`
                         }
                       
                        
              }
          }


    }
}






/*10a. Write a constructor function ‘MakeAccount’ that returns a bank account object.
1. The bank account object has three methods: withdraw, deposit, and balance.
2. The account should have a private variable, balance, which is accessed by the three
methods. The private variable should not be accessible by code external to the object.
3. The balance method will return the value of the balance private variable.
4. The withdraw and deposit methods will deduct or increase the balance private variable.*/ 

function MakeAccount(){
    let balnace=0;

    this.withdraw=function(amount){
        balnace=balnace-amount;    

    }

    this.deposit=function(amount){
           balnace=balnace+amount;
    }

    this.getBalance=function(){
            return balnace;
        }
    
}