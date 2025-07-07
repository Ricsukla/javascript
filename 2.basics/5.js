function add(num1,num2){
    return(num1+num2)
}
console.log(add(3,"a"))

function add1(num1,num2){
    return(num1+num2)
}
console.log(add(3,undefined))//if in place of undefined, null would have been there, then, 3 is the ans

function login(username){
    return `${username} just logged in `
}
console.log(login("Richa"));

//functions with objects
const user={
    name:"Richa",
    age:18
}
function details(anyobject){
    return `${anyobject.name} is ${anyobject.age} years old`;
}
console.log(details(user));
//or
function details1(anyobject1){
    console.log( `${anyobject1.name} is ${anyobject1.age} years old`);
}
details1({
    name:"Richa",
    age:18
})

function login1(username="vaidehi"){
    if(!username){//This checks if username is a falsy value (undefined, null, "", 0, false).
        console.log("Please enter a username");
        return
    }
    return `${username} just logged out`
} 
console.log(login1("richa"))
