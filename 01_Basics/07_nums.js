const balance = 100
console.log(balance);
const deposit = new Number(50)
console.log(deposit);

 console.log(deposit.toString);
 console.log(deposit.toFixed()); 

 
const hundred = 10000000000;
console.log(hundred.toLocaleString('en-IN')); // 1,00,00,00,000

// *************** math operations ****************
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-3)); // 2.718281828459045 
console.log(Math.ceil(3.2)); // 4
console.log(Math.floor(3.8)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // random number between 0 and 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20