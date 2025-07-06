let number="88";
console.log(typeof number);
let number1=Number(number);
console.log(typeof number1);
//but if number is 88abc
let num="88abc"
let num1=Number(num);
console.log(typeof num1);//this also came as number but how can we convert 88abc as a number, see whats the number changes]d
console.log(num1);//NaN came, which means not a number

let gum=null
let gum1=Number(gum);
console.log(typeof gum1);
console.log(gum1);

let loggedIn=1;
let loggedIn1=Boolean(loggedIn);
console.log(loggedIn1);
console.log(typeof loggedIn1);


let loggedIn2=" gunnu";//agr " ",empty string hota toh 0 aata ans
let loggedIn3=Boolean(loggedIn2);
console.log(loggedIn3);
console.log(typeof loggedIn3);
let value=3
let negValue=-value;
console.log(negValue)
console.log(9+9)
console.log(8/9)

console.log("1"+4)
console.log(1+4)
console.log(1+"4")
console.log("1"+4+2)
console.log(2+5+"1")
console.log(7+"1"+4)
console.log(+true)//true+ is error
console.log(+false)
console.log(+"")
console.log("2">1)
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)
console.log("2"==2)
console.log("2"===2)
//console.log("2"=2)
