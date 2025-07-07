const names=['richa','bitu','kenzie']
const names1=['kylie','kendall','kris']
names.push(names1)
console.log(names);
names.concat(names1)
console.log(names);

const allnames=names.concat(names1)
console.log(allnames);
///or
const newnames=[...names,...names1]
console.log(newnames);//same ans as upr wla concat
const arr1=[34,5,2,5,[9,5],[[4,5,22]]]
console.log(arr1.flat(Infinity));//all dimentions are spreaded out
console.log(Array.isArray("Sukla"));
console.log(Array.from("sukla"));
console.log(Array.from({name:"sukla"}));

let marks1=80
let marks2=79
let marks3=97
console.log(Array.of(marks1,marks2,marks3));





