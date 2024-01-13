// 


console.log(Math.PI);
console.log(Math.E);

/* 
! Math.round ar kaj hocche kono point jukto number k setar round value te nia asa --------- Ex: 4.12566 ==== atake math.round korle value asbe (4); ---------------- Ex: 4.895 ====== atake Math.round korle value asbe 5
*/
console.log(Math.round(4.8558));

/* 
! Math.floor ar kaj hocche kono point jukto number r main number take output kora .....point r porer numbergulo k ata catch korena================== Ex: 45.258 ==== 45

*/

console.log(Math.floor(45.58));

/* 
! Math.max & Math.min ar kaj hocche aker odhik Number ba Number jukto Array theke Maximum ba Minimum Number take ber kore deoa

*/

let numArr = [25,10,500,20,41];

for(let i = 0; i<numArr.length; i++){
    console.log(Math.max(numArr[i]));
}

console.log(Math.max(...numArr));


/* 

! Math.random ar kaj holo (0-1) ar moddho randomly number create kora EX: -==== 0.25, 0.85, 0.99, 0.255, 0.874

*/

console.log(Math.random());





