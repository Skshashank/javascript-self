const score = 400;
// console.log(score);

const balance = new Number(200);
// console.log(balance);

// console.log(balance.toString().length); //type of string
// console.log(balance.toFixed(1)); //precission value 100.0

const otherNumber = 123.5995

// console.log(ortherNumber.toPrecision(4)); //123.6

const hundereds = 1000000
// console.log(hundereds.toLocaleString('en-IN')); //commas lage rhte hai 1,00,000

//+++++++++++Maths++++++++++++++++++
console.log(Math); // Object {Maths} we get all the property
console.log(Math.abs(-4)); // positive
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); //8

console .log(Math.random()); //value 0 to 1 but random 
console.log(Math.random()*10)+1); //1 value shift, to avoid case like if our minimum value is 0
console.log(Math.floor(Math.random()*10)+1); //bodmas rule 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min)) + min) //



