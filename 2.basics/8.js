//iife-immediately invoked function expressions
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
(function chai(){
    console.log(`DB CONNECTED2`);
    
})();
((name)=>{
    console.log(`DB CONNECTED3`);
    
})('richa')