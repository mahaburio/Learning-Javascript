/*

TODO: ভ্যারিয়েবল হচ্ছে একটা পাত্রের মতো, যেখানে আপনি ‘কিছু’ রাখতে পারবেন। জাভাস্ক্রিপ্ট এ ‘কিছু’ বলতে অনেককিছু। আপনি চাইলে নাম্বার থেকে শুরু করে স্ট্রিং, অবজেক্ট, এমনকি ফাংশনও ভ্যারিয়েবল এর মধ্যে সেইভ করে রাখতে পারবেন। ভ্যারিয়েবল হলো ধরুন আপনি কথা বলতেছেনঃ “আব্দুল করিম সাহেব অনেক ভালো মানুষ, উনি অমুক কোম্পানীতে জব করে”। এখন এখানে দেখুনঃ আপনি প্রথম ‘আব্দুল করিম সাহেব’ এর নাম বলছেন, কিন্তু দ্বিতীয়বার কিন্তু বলেননি। দ্বিতীয়বার আব্দুল করিম হয়ে গেলো ‘উনি’। হ্যা ভ্যারিয়েবল ও অনেকটা এরকম।

* Variabels 3 vabe lekha jai
  (var, let, const);
  
  ! let, const use korai uttom now;
  
  TODO: Note::: Variables ar name deoar jonno 4 ta niom ache

    1. জাভাস্ক্রিপ্ট এর রিসার্ভড কীওয়ার্ড ইউজ করতে পারবেন না।
    2. ভ্যারিয়েবলের নাম অক্ষর দিয়ে শুরু হতে পারবে, তবে নাম্বার,স্পেশাল ক্যারেক্টার !, @, #, %, ^, &, *, (, ) দিয়ে     শুরু হতে পারবে না।কিন্তু ‘_’(আন্ডারস্কোর) ও ‘$’ (ডলার সাইন) ইউজ করে শুরু করতে পারবেন।
    3. ভ্যারিয়েবলের নামের মাঝখানে স্পেস ইউজ করা যাবে না।
    4. জাভাস্ক্রিপ্ট এ ভ্যারিয়েবল এর নাম কেস-সেনসিটিভ।
  

*/



/*

TODO: VAR FUNCTION SCOPE
 */

  var x = 100;

function calC(){
  
  if(true){
    var x = 15;
    console.log(`Hello World! ${x}`);
  }

  // ? ============== FULLY ALLOWED THIS PLACE ==================
  console.log(x);
}

calC()
console.log(x);

// todo let, const BLOCK scope

console.log("Let started");


let y = 1000;

function letBlockScope(){
  if(true){
   let y = 25;
    console.log(y);
  }
  // ! =============== NOT ALLOWED THIS PLACE ( console.log(x); ) ===============
}

letBlockScope();

console.log(y);


console.log("practise output");

let z = 25; 

function textCal(){
  if(true){
     z = 50;
    console.log(z);
  }
  console.log(z);
}

textCal()


console.log(z);

