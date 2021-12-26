let user = {
  log: 'uz',
  pass: '123'
}

let logPass = false;
let passed = false;

if (user.log.length < 3) {
  console.log("Login kamida 3 belgidan iborat bo'lishi kerak")
} else {
  logPass = true;
}

if (user.pass.length < 8) {
  console.log("Parol kamida 8 belgidan iborat bo'lishi kerak")
} else {
  passed = true;
}

if (logPass == true && passed && true) {
  console.log(`siz muvaffaqqiyatli ro'yxatdan o'tdingiz`);
  console.log( user);
} 