const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === 'clear') {
      display.value = '';
    } else if (action === 'backspace') {
      display.value = display.value.slice(0, -1);
    } else if (action === 'calculate') {
      try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});
