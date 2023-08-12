let args = process.argv;

let n = parseInt(args[2]);
let arr = [];

for(i=0;i<n;i++){
   let val = parseInt(args[i+3]);
   arr.push(val);
}

for(let i=0;i<n;i++){
    console.log(arr[i]);
}

console.log(arr);
console.log(arr.length);




//write a program palibdrome prog
// let str = "madam"
// let i=0;
// let j=str.length-1;
// while()