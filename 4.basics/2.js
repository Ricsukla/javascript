//filter
const myNums=[3,4,5,6]
const newNums=myNums.filter((num)=>num>5)
console.log(newNums);
//or
const newNums1=myNums.filter((num)=>{
    return num>5
})
console.log(newNums1);
myNums.forEach((num)=>{
    if (num>5){
        newNums.push(num)//adding
    }
}
)
console.log(newNums);
const books=[
    {title:'Book one',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book two',genre:'Non-Fiction',publish:1989,edition:2006},
    {title:'Book third',genre:'History',publish:1991,edition:2004},
    {title:'Book four',genre:'Science',publish:1971,edition:2004},
    {title:'Book five',genre:'Fiction',publish:2000,edition:2004},
    {title:'Book six',genre:'Non-Fiction',publish:2004,edition:2004},
    {title:'Book seven',genre:'Fiction',publish:2002,edition:2004}
]

let userbooks=books.filter((bk)=>{
    return bk.publish>=1996 && bk.genre=="Fiction"
}
)
console.log(userbooks);
