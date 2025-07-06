let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let myCreatedDate=new Date(2023,0,23)
let myCreatedDate1=new Date(2023,0,23,5,3)
let myCreatedDate2=new Date("2023-01-23")
let myCreatedDate3=new Date("01-12-2023")
console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
console.log(myTimeStamp)
let newDate=new Date()
console.log(myCreatedDate.getDate())
console.log(myCreatedDate.getTime())
console.log(myCreatedDate.getMonth())
console.log(myCreatedDate.getDay())
console.log(Math.floor(Date.now()/1000))
console.log(newDate.getMonth()+1)
newDate.toLocaleString('default',{
    weekday:'long',
    timeZone:'Asia/Kolkata'
})

