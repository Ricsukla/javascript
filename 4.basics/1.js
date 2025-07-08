//higher order array loops
//for of
const arr=[2,3,4,5,6]
for(const num of arr){
    console.log(num);
    
}
const greetings="namaste"
for(const greet of greetings ){
    console.log(`Each char is ${greet}`);
}
//map-unique and ordered
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")
console.log(map);

for(const key of map){//but this gives both
    console.log(key);
}
for(const [key] of map){
    console.log(key);
    
}

for(const [key,value] of map){
    console.log(value);
}
const myObject={
    game1:'NFS',
    game2:'Spiderman'
}
for(const key in myObject){
    console.log(myObject[key]);
    
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
const programming=["js","rb","java","cpp","c#"]
for (const key in programming){
    console.log(key);
    
}
for (const key in programming){
    console.log(programming[key]);
    
}

//for(const key in map){
//   console.log(key);
//}
//map jaisa ek aur method forEach
programming.forEach(function (val){
    console.log(val);
    
})
programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})