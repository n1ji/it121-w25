let randNum = Math.random() * 50, 
    randNum2 = Math.random() * 20;
    
let addVar = randNum + randNum2,
    subtractVar = randNum - randNum2,
    multiplyVar = randNum * randNum2,
    divideVar = randNum / randNum2,
    modVar = randNum % randNum2;

console.log(
    "Sum: " + addVar + 
    "\nDifference: " + subtractVar + 
    "\nProduct: " + multiplyVar + 
    "\nQuotient: " + divideVar + 
    "\nRemainder: " + modVar
);