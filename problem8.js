/*
৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
*/

let numbers = [100, 90, 80, 70, 60, 50,  40, 30, 20, 10, 5,];
let number = numbers.indexOf(60);
// console.log(number);

let replace = numbers.splice(number, 4, 120);
console.log(numbers);
numbers.push(150, 200);

numbers.pop();
numbers.pop();
console.log(numbers);