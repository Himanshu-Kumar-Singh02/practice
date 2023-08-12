//t1 = read file (Disk)
//t2 = calculate prime (CPU)
//t1 and t2 is done serially not parallel

let minimist = require('minimist');
let fs = require('fs');

// node FirstLackOfCallback.js --source=f1.txt --dest=f2.txt --n=40000
let args = minimist(process.argv);

function IsPrime(x){
    let isPrime = true;
    for(let div=2; div<x;div++){
        if(x%div==0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

// task 1 begins

let t1 = Date.now();
console.log("task1 start at "+t1%100000);

let stext = fs.readFileSync(args.source);

let t2 = Date.now();
console.log("task1 end at "+t2%100000);
console.log(t2-t1);

//task 1 ends

//task 2 starts

let t3 = Date.now();
console.log("task2 starts at "+t3%100000);

let arr = [];
for(let i=2;i<args.n;i++){
    let isPrime = IsPrime(i);
    if(isPrime==true){
      arr.push(i);
    }
}

let t4 = Date.now();
console.log("task2 ends at "+t4%100000);
console.log(t4-t3);

//task 2 ends

console.log(t4-t1);

