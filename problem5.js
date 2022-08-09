/*
৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
*/

// var isGraduated = true;
// var salary = 5550000;
// var cars = 5;

// if(isGraduated == true && salary > 58000 && cars >= 5){
//     console.log("Eso babu biye kore feli")
// }

// else{
//     console.log("tor kopale biye nai ")
// }

let isGraduated = true;
let salary = 550000;
let cars = 8;

if (isGraduated == true && salary > 80000 && cars >= 10 ){
    console.log("aso prem kori amra");
}

else if( isGraduated == true || salary > 9000000 && cars >=15){
    console.log("aso dekha kori tmar sathe");
}

else{
    console.log("tomar sathe amr jay na")
}