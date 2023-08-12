// javascript is dynamically typed language whereas java is a static typed language
// aka -> variable ka datatype change ho skta h

//datatypes -> undefined, string, number, boolean, null

//reassinging is possible only
let i=10;
console.log(i);

i="hello world";
console.log(i);

i=true;
console.log(i);

//---------------------------------------

// 1st problem in var -> Redeclaration thats why -> let and const comes in to role
var a;
console.log(a);
var a=5;
console.log(a);
var a = "himanshu";
console.log(a);
var a = true;;
console.log(a);
a = null;
console.log(a);

//2nd problem in var -> Scoping

if(true){   //let make it block scoped
    var c = 2;
    console.log(c);
}

console.log(c);

