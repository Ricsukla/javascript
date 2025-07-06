//Primitive datatypes= 7types:string, number,boolean,null,undefined,symbol,bigint
//reference(non-primitive)
//array,objects,functions
const id=Symbol('123')
console.log(id)
const anotherid=Symbol('123')
console.log(id===anotherid)
//why false, cuz symbol ka kaam hi yahi hai, sbko uniqueness dene ki
const bigNumber=25435365654654654666n
console.log(bigNumber)

//array
const heroes=["shaktiman","baalveer","naagraj"]
//object(curly braces ke andr)
let myObj={
    name:"richa",
    age:18
}
const myFunction=function(){
    console.log("Radhe Radhe");
    return 0;
}
myFunction()
console.log(typeof bigNumber)
