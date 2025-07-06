//stack memory for primitive dataypes
//heap memory for non-primitive datatypes
//stack another ne copy leta hai yt ka and, jb uski value aa jati, vo myyt ko bhul jata

let myYtname="richadotcom"
let anothername=myYtname
console.log(myYtname)
console.log(anothername)
anothername="djfsksvs"
console.log(myYtname)
console.log(anothername)
//heap-jb valuw two ki change hogi, vo 1st wle ko bhi change krake lekr jaega
let userOne={
    email:"richa@google.com",
    upi:"usfa@ybl"
}
let userTwo=userOne
console.log(userOne)
console.log(userTwo)
userTwo.email="ritu@google.com"
console.log(userOne)
console.log(userTwo)
