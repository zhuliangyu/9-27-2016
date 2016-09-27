i=100;
console.time("while");
while(i>0){

    console.log(i);
    i--;
}
console.timeEnd("while");

console.time("for");
for(var i=0;i<100;i++){
    console.log(i);
}

console.timeEnd("for");