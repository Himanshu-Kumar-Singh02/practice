let args = process.argv;
// console.log(args);

// let i = args[2];
// console.log(i);

// console.log(args[0]);
// console.log(args[1]);
// console.log(args[2]);
// console.log(args[3]);


//  everthing comes as string
let i =args[2];
console.log(typeof i)
i = i+ 30;
console.log(i);
//  parseInt(String,base)

let j = parseInt(args[2],10);
console.log(typeof j);
j= j + 30;
console.log(j);