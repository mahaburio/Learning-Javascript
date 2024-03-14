
// ? lexical scoping holo akta function r moddho r akta function theke parent function r sob kichu k acces korar power ===== Orthaat babar sompotti jemon sontanera peye jai thik temon... 

// ! Tobe baba jemon sontaner sompotti vag paina temon lexical scope a parent funciton child function ar kono kichui access korte parbena.


function firstFnc(){
  var a = 'First'
  var b =50;
  console.log('Mahabur Rahman');
  function secondFnc(){
    console.log(a);

    function thirdFnc(){
      console.log(b);
    }
    thirdFnc()
    
  }
  secondFnc()
}

firstFnc()