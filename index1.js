let a = [10, 1, 3, 5, 8, 9];
let b = 0;

for (var i = 0; i < a.length; i++) {
   for (var j = i; j < a.length; j++) {
      if (a[i] > a[j]) {
         b = a[j];
         a[j] = a[i];
         a[i] = b;
      }
   }
}

console.log(a)