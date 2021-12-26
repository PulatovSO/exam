
let input = document.querySelector('input');
let btn = document.querySelector('button');
let result = document.querySelector('.result-wrap');

btn.addEventListener('click', () => {
  let display = document.createElement('div')
  display.classList.add('count');
  result.appendChild(display)
  let count = input.value;
  setInterval(() => {
    if (count == 0){
      display.style.display = 'none';
    }
    display.textContent = count;
    count--;
  }, 1000)
})

