// * Normal function ↓

function calculate(a, b) {
  return a + b;
}

console.log(calculate(7, 8));

//*  IIFE-> Immediatly invocked function expressions

/**
 *
 * todo => Function jokhon invoked hoi tokhoni function ar moddho ja kichu ache seta Execution howa start kore.
 *
 * todo => Orthat jokhon akhane calculate(7, 8) dia call kora holo tokhon function calculate(a,b){ return a+b } ata execution holo
 *
 * * Kono function k jodi execution korate hoi tahole call kora must. Ar akhanei aseche IIFE. Mane function create and execution ak sathei hoeye jabe.
 *
 *
 *
 * !!!! IIFE holo mainly function k sathe sathe orthat jekhane ata lekha hocche sekahanei CALL kore deoa. Call korar jonno alada kore lekhar proyojon nei.
 *
 * ? Ai IIFE ar maddhome akta moduler theke puro project a Data babohar kora jai khub sohojei.
 *
 *
 */

//*  IIFE-> Nicher Ex ta holo IIFE

(function calculateIIFE(a, b) {
  console.log(`${a + b}`);
})(2, 8);

// * Normal object constructor

let controller = (function () {
  let x = {
    name: "Mahabur Rahman",
    age: 24,
  };
  return x;
})();

// ======

let myName = (function () {
  console.log(`Hello World! My name is ${controller.name} & I am ${controller.age} years old.`);
})();

