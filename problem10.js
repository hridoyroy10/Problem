/*
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
*/

let numbers = [50, 60, 55, 66, 99, 88, 95, 75, 24, 65, 98, 80, 45, 88, 85];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    if(number < 80){
        continue;
    }
    console.log(number);
}