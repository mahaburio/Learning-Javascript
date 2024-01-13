// Learn JS String

// var str = "Hello Bangladesh"; // It's called string literal

// var st = String('Mahabur Rahman'); // It's called Constructor string

//  Learn String Built in Method

/* 

  1. concat() ================ String der k concat kora hoi
  2. toLowerCase() =========== Kono string k lower case a convert korte babohar hoi
  3. toUpperCase() =========== Kono string k Upper case a convert korte babohar hoi
  4. charAt(), at() ================ Kono string a index number dia tar value take dhore ana hoi
  5. substr() ================ Kono string a nirdisto index number theke kete akta notun string return kore
  6. trim() ================== Kono string ar prothome and sesher space gulo bad dite babohar hoi 
  7. split() ================= Kono string k array te convert korte babohar hoi 
  8. replace() =============== Kono string ar moddho theke kono kichu k soria onno kichu add kora 
      TODO: replace(' ','') ==== It is a nice trick (Ata dia kono string r moddho theke sob space gulo k out kore just word gulo k bachai kora jai)
 */

let x = "Hello everyone; \nThis is Mahabur Rahman ";

let y = "I am Bangladeshi";

let z = x.concat(y);

let r = z.replace(' ','')

let s = y.substring(5)

let sp = y.split(' ')

let rep = y.replaceAll(" ","");
let toLrep = rep.toLowerCase()

for (let i = 0; i < rep.length; i++) {
  console.log(rep[i]);
}

console.log(toLrep.at(3));
