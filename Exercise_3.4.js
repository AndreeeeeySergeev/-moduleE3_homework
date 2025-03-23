// let twointeger = setInterval(function(a, b){
//  while (a < b){
//    console.log(a + 1);
//    return twointeger
//  }
// },1000, 5, 15)

function sum(a, b){
  for (let i = 0; a < b; i++) {
    console.log(a + i);
  }
}
setTimeout(sum, 1000, 5, 15) // незнаю, почему не работает, получается бесконечный вызов