//scope
//function one(){
    //const username="richa"
    //function two(){
    //    const website ="instagram"
    //    console.log(website);
    //}
    //console.log(website);
    //two()
//}
//one()

//ABOVE IS ERROR AS WE ARE ASKING FOR WEBSITE TO BE PRINTED OUT OF SCOPE(SCOPE TWO LINE 4 TO 7)
function one(){
    const username="richa"
    function two(){
        const website ="instagram"
        console.log(username);
    }
    two()
}
one()
//one ke objects can be accessed inside two, but two ke one mein nhi milenge, only inside two
if(true){
    const username="richa"
    if(username==="richa"){
        const website="whatsapp"
        console.log(username+website);
    }
}
