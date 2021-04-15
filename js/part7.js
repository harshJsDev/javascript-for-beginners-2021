// repeat
// replace
// replaceAll
// slice or substring
// startsWith
// toLowerCase
// toUpperCase
// toString
// trim
// Index of

let exampleString = 'Code Fusion';
let result = exampleString.repeat(3);
console.log(result);

// ================================================================

let exampleString2 = "I ❤️ Coding. Coding is my life.";
result = exampleString2.replace("Coding", "Javascript");
console.log(result);
result = exampleString2.replaceAll("Coding", "Javascript");
console.log(result);

// ================================================================

let exampleString3 = "I ❤️ Coding. Coding is my life.";
result = exampleString3.slice(4, 8);
console.log(result);


// ================================================================
let exampleString4 = "I ❤️ Coding. Coding is my life.";
result = exampleString4.startsWith("I");
console.log(result);


// ================================================================

let exampleString5 = "THIS IS NOT THE LOWER  CASE 💼.";
result = exampleString5.toLowerCase();
console.log(result);

// ================================================================

let exampleString6 = "this is not the upper case 💼.";
result = exampleString6.toUpperCase();
console.log(result);

// ================================================================

let exampleString7 = 123;
console.log(typeof(exampleString7));

result = exampleString7.toString();
console.log(typeof(result));


// ================================================================

let exampleString8 = "       Lets trim some extra space";

console.log(exampleString8);

result = exampleString8.trim();
console.log(result);


//  ===============================================================
let exampleString9 = "Search the hidden word in this sentence.";
document.write(exampleString3)

result = exampleString9.indexOf("hidden");
console.log(`the index of hidden  ${result}`);