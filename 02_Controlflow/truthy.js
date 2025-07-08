const userEmail = "hites@d.ai"
if(userEmail) {
  console.log("User email is set");
}else{
    console.log("User email is not set")
}

// Falsy values in JavaScript
// false,0,-0,BigInt 0n, "", null, undefined, NaN
// truthy values in JavaScript
// "0",'false'," ",[] ,{}, function(){}

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10


console.log(val1); // 5

// Terniary Operator
// condition ? true : false
const iceCream = "100";
iceCream < 80 ? console.log("less than 80"): console.log(("more than 80"));
