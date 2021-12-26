let check = 0;
let till = 29;
let count = 0;

for (let i = 2; i <= till; i++) {
  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      check = 1
      break
    } else if (check == 0) {
      count++
    }
  }
}
console.log(count)