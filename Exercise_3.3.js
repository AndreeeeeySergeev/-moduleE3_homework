function count(a) {
  if (1 < a <= 1000) {
  let arr = new Array(a); // создаем массив указанной длины
  for (let e = 2; e <= arr.length - 1; e++) { // заполняем массив
    arr.push(e);
  }
    for (let i= 2; i <= arr.length - 1; i++) {
      if (a % arr[i] === 0) { // если число делится без остатка, только на себя,
        console.log("Число непростое");  // то число простое
      } else {
        console.log("Число простое");
      }
    }
} else {
  console.log("Введите другое число");
  }
}

count(10)