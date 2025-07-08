const myNumers=[45,3,25,52,555,62,2,1]
const newNums=myNumers.map((num)=>{return num+10})
console.log(newNums);
//multiple conditions maps and filter
const newNums1=myNumers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)

console.log(newNums1);
//array reduce
const myNums=[4,5,6]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
    
},0)
console.log(myTotal);//sum
//simple wla direct ans
const myTotal1=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal1);



