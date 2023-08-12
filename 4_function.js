let args = process.argv;

let n = parseInt(args[2]);

for(let i=1;i<=n;i++){
    if(isPrime(i)){
        console.log(i);
    }
}

function isPrime(x){
    for(let div=2;div*div<=x;div++){
        if(x%div==0){
            return false;
        }
    }
    return true;
}