//Q1 stack


const _items=new WeakMap();// making private;
class Stack{
 constructor(){
    _items.set(this,[]);
 } 
 push(obj){
   let items=_items.get(this);
      items.push(obj);
 }
 pop(){
   const items=_items.get(this)
   if(items.length===0)
       throw new Error('Stack is empty')
   return items.pop(); 
 }

peek(){
      const items=_items.get(this);
    if(items.length===0)
             throw new Error('Stack is empty');
    return items[items.length-1]
}
count(){
    const items=_items.get(this);
    return items.length;
}
 
}
const stack=new Stack();
      stack.push(2)
      stack.push(3);
    console.log(stack.count());
       
