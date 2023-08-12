//read a file, Capatilize every word & write the file

let minimist = require('minimist');
let args = minimist(process.argv);

// node firstFile.js --source=f1.txt --dest=f2.txt

let fs = require('fs');       // inbuilt module in node called fileSystem

let sText = fs.readFileSync(args.source);
console.log(sText);

// let words = sText.split(" "); //split the string 

// for(let i=0;i<words.length;i++){
//     words[i]= words[i].toUpperCase();
// }

// let dText = words.join(" ");  // join array

// fs.writeFileSync(args.dest,dText, "utf-8");