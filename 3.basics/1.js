//control flow
if(77=="77"){
    console.log("done");
}
const age=18
if(age===14){
    console.log("you aren't an adult");
}else{
    console.log("you can drive");
}
//switch
const month=4
switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    default:
        console.log("Bye");
        break;
}
//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy values
//"0",'false'," ",[],{},function(){}
const Email=[]
if(Email){
    console.log("got the email");
}else{
    console.log("don't have user email");
}
const emptyObj={ }
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
//nullish coalescing operator(??)
let val1;
val1=6??10
console.log(val1);
cal2=null??10
console.log(cal2);
val2=undefined??13
console.log(val2);

val3=null??2??9
console.log(val3);
//ternary operators
const price=3999
price>=8000?console.log("its expensive"):console.log("its not expensive");

