/*
৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
*/

let num1 = 80;
let num2 = 80;

if(num1 > num2){
    console.log("Tomar Program ta true hoicha");
}
else if (num1 < num2){
    console.log("Right");
}
else if(num1 == num2){
    console.log("ata Sothik hoicha");
}
else if(num1 != num2){
    console.log("ata Sothik hoy nai ");
}
else if(num1 <= num2){
    console.log("Tumi pash krcho");
}

else if(num1 >= num2){
    console.log("Tumi ato valo Programar hoila kmn kore")
}
else{
    console.log("Tomar Program ta falls hoicha");
}