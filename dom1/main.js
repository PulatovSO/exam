let body = document.querySelector('body');
let colorTab = document.querySelector('.color-tab');
let colors = document.querySelectorAll('.color');

body.addEventListener('keydown', (e) => {
  if (e.shiftKey) {
    colorTab.style.display = 'flex';
    for (color of colors) {
      color.addEventListener('keyup', (e) => {
        if (e.key === 'Tab') {
          if (e.target.classList.contains('blue')){
            body.style.background = 'blue';
          } else if (e.target.classList.contains('green')){
            body.style.background = 'green';
          } else if (e.target.classList.contains('orange')){
            body.style.background = 'orange';
          } else if (e.target.classList.contains('red')){
            body.style.background = 'red';
          } else if (e.target.classList.contains('pink')){
            body.style.background = '#d602c4';
          }
          colorTab.style.display = 'none';
        }
      })
    }
  }
})
