let minimist = require('minimist');
let fs = require('fs');

let args = minimist(process.argv);

// node First_File.js --source=t1.txt --dest=t2.txt

//read File
let sText = fs.readFileSync(args.source, "utf-8");

//Capatilize
let dText = sText.toUpperCase();

//Write file
fs.writeFileSync(args.dest, dText, "utf-8");