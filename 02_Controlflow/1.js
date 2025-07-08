// if
// const temperature = 41

// if(temperature < 50) {
//     console.log("less than 50");
    
// }else{
// console.log("temperature is greator than 50");
// }


// const score = 200
// if(score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`); // This will throw an error because 'power' is not defined in this scope


 const userLoggedIn = true
 const debitCard = true
 const loggedInFromMobile = false
 const loggedInFromWeb = true
 if(userLoggedIn && debitCard && 2==2){
    console.log("User can make a purchase");
 }
if(userLoggedIn || debitCard || loggedInFromMobile || loggedInFromWeb){
    console.log("User can make a purchase");
}
