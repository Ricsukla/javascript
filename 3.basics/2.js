//for
for(let index=0;index<10;index++){
    const element=index;
    console.log(element);
}
for(let i=0;i<10;i++){
    
    for(let j=0;j<10;j++){
        console.log(`Outer loop and inner loop: ${i} and ${j}`);
    }
}
//break and continue
for(let index=1;index<=13;index++){
    if(index==4){
        console.log(`Detected 4`);
        break;
    }
    console.log(`Value of i is ${index}`);
}
for(let i=1;i<=13;i++){
    if(i==4){
        console.log(`Detected 4`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}