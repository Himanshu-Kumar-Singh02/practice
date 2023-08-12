let args = process.argv;

let n = args[2];
// let n = parseInt(args[2]);
console.log(typeof n);

// n string mae but fir bhi chl jaeyga kyunki JS smart h change kr deta h Number mae
//  but not advisable
for(let i=1;i<n;i++){
    console.log(i);
}