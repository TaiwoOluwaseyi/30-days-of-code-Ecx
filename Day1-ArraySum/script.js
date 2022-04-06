const btnGet = document.querySelector('button');
const result = document.querySelector('h1');

const numbers = [ 40, 30, 30, 30]

btnGet.addEventListener('click', () => {
  result.innerText = numbers.reduce((total, current) => total + current, 0);
})
