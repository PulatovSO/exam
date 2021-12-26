function add(a = 0, b = 0) {
  if (b < 0) {
    console.log(`${a} - ${b * -1} =`, a+b);
  } else {
    console.log(`${a} + ${b} =` , a+b);
  }
}

add(5, -2.5)
add(-2)
add(0, -10)