//objects
const user={}
user.id="8877xx"
user.name="Richa"
console.log(user);
//nested objects
const regUser={
    email:"jsjfj@gmail.com",
    fullname:{
        userfullname:{
            firstname:"richa",
            lastname:"shukla"
        }
    }
}
console.log(regUser.fullname.userfullname);

//objects joining
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}
console.log(obj3);

const obj4=Object.assign(obj1,obj2)
console.log(obj4);
//or
const obj5=Object.assign({},obj1,obj2)
console.log(obj5);
//or
const obj6={...obj1,...obj2}
console.log(obj6);

//user par operations
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//object creation
const course={
    coursename:"cs",
    price:"789",
    teacher:"Shukla"
}
//object destructuring
//It extracts the teacher property from the course object and creates a new variable called teacher that holds the value of course.teacher.
//its like, const teacher = course.teacher;
//sir is the new variable name you're creating.

const{teacher:sir}=course
console.log(sir);
//json looks like this
//{
   // "name":"richa",
   // "subject":"it"

//}