// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); T
// console.log("02" > 1); T

//avoid these comparison
console.log(null > 0); //t
console.log(null == 0); //t
console.log(null >= 0); // the reson is tha an equality check == and comparison ><>>= <= work differently . comaprison convert null to a number ,treating it as 0.Thats why(3) null >=0 and (1) null>0 is false.

console.log(undefined == 0); //f
console.log(undefined > 0); //f
console.log(undefined < 0); //t

// === strict check data types

console.log("2" === 2); 