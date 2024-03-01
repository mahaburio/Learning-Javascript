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