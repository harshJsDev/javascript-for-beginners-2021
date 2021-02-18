// What are data types? and
// What are different data type in javascript?

/*Answer :Data types are the categories of dta value which can 
be stored in javascript language.
 For example in English there is a alphabet
 and number system. Likewise in javascript
 There are 6 types of data types 
 1. String - which is use to store or manipulate words data 
 or even sentences 
 2. Number: number is used for storing 
 different number such as Natural Number, decimal Number,
 negative number. 
 *well in many programing Languages decimal number have there 
 own data type Float but never mind

 3. Boolean : true / false used for conditional operator 

 4. Object: Object type is a complex data type such ARRAY JSON ARRAY, 
 simply a collection of data. Like a list

 5 Null : Null is empty its consists no data.
 
 6 Undefined : a variable which is not initialed means value is
 not set is undefined.

 */

// STRING

let youtubeChannelName = "Code Fusion";
console.log("youtubeChannelName type is " + typeof (youtubeChannelName));

// Number
let currentSubscriberCount = 532;
console.log("currentSubscriberCount type is " + typeof (currentSubscriberCount));

// Boolean
let areYouSubscriber = true;
console.log("areYouSubscriber type is " + typeof (areYouSubscriber));

// Object

let subscriberNameList = ["Harsh", "Max", "John doe"];
// document.write(subscriberNameList);
console.log("subscriberNameList type is " + typeof (subscriberNameList));

// null
let procrastination = null;
console.log("procrastination type is " + typeof (procrastination));
console.log("procrastination value is " + procrastination);

// undefined

let dateOfMonetization ;
console.log("dateOfMonetization type is " + typeof (dateOfMonetization));
console.log("dateOfMonetization value is " + dateOfMonetization);
