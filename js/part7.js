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

// ======================


let exampleString = "I love coding. ";
let result = exampleString.repeat(5);
console.log(result);

let exampleString2 = "I love coding, coding is my life. ";
result = exampleString2.replace("coding", "Javascript");
console.log(result);

result = exampleString2.replaceAll("coding", "Javascript");
console.log(result);

let exampleString3 = "Subscribe to code Fusion.";
result = exampleString3.substring(13, 24);
console.log(result);

let exampleString4 = "Please like this video or live stream";
result = exampleString4.startsWith("please");
console.log(result);


// ABCD abcd

let exampleString5 = "this is not the uppercase!!!";
// console.log(exampleString5);
result = exampleString5.toUpperCase();
console.log(result);

let exampleString6 = "THIS IS NOT LOWER CASE!!!!!!";
result = exampleString6.toLowerCase();
console.log(result);

let exampleNumber = 33;
console.log(typeof (exampleNumber));
result = exampleNumber.toString();
console.log(result);
console.log(typeof (result));

let exampleString7 = "     harsh Kumar     ";
console.log(exampleString7);
console.log(exampleString7.length);
result = exampleString7.trim();
console.log(result);
console.log(result.length);

let exampleString8 = "Please share this video to you friend and help them and support me also";
result = exampleString8.indexOf("video");
console.log(result);