//singleton
//create object
//object literals
const user={
    name:"richa",
    "full name":"richa sukla",
    age:18,
    email:"sukla1@gmail.com",
    location:"Dehradun",
    days:["Wednesday","Friday"],
    mySym:"mykey1"
}
console.log(user.email);//1st
//or
console.log(user["email"]);//2nd
//full name cant be done like 1st method
console.log(user["full name"]);
console.log(typeof user.mySym);

//ab hum freeze krdenge object ke email ko toh woh baadme change nhi ho skta, humne isiliye comment out kia hai , ya toh hum yeh chla le, ya neeche wla, function , dono saath nhi chlenge, as in if freezed object, toh object ki greeting kaise hogi, so ek ko comment kro aur ek ko run
//just remove the comments in line 23 and see the freezing effect pr fir neeche wla function ko comment krdena pura
user.email="sukla@gmail.com"
//Object.freeze(user)
user.email="guddu@gmail.com"
console.log(user.email);

//function
user.greeting=function(){
    console.log("Hi everyone");
    
}
console.log(user.greeting());
user.greeting1=function(){
    console.log(`Dekho Dekho,${this.name}`);
    
}
console.log(user.greeting1());