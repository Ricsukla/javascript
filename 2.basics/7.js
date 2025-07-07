const user={
    username:"richa",//data property
    price:77,//data property
    
    welcome:function(){//function property
        console.log(`${this.username},welcome to website `);
        console.log(this)
        
    }
}
user.welcome()
//arrow
const chai=()=>{
    let username="richa"
    console.log(this.username);
    
};
chai()
const addTwo=(num1,num2)=> {
    return num1+num2
}
console.log(addTwo(8,6));
//or
const addTwo1=(num1,num2)=> num1+num2
console.log(addTwo1(8,6));




