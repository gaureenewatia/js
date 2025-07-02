const myHomie = new String("hitesh-we-ln-lb")
// console.log(myHomie.toUpperCase());
// console.log(myHomie.charAt(2));


const newString = myHomie.substring(0, 3)
console.log(newString);

const anotherString = myHomie.slice(-8, 3)
console.log(anotherString);

const str = "    hitesh   "
console.log(str);
console.log(str.trim()); // removes whitespace from both ends

const url = "https://www.youtube.com/@hiteshchoudhary"
console.log(url.includes("hitesh")); // checks if the string contains "hitesh"
console.log(url.replace('youtube','instagram')); // checks if the string starts with "https"

console.log(myHomie.split('-')); 