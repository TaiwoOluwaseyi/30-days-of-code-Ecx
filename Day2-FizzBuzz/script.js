// Using the for loop
const inputValue = document.querySelector ('#fizz')
const btn = document.querySelector('.btn')
const container = document.querySelector('#container') 
const java = [] 

const fizzBuzz = () => {
  for (var i = 1; i <= inputValue.value; i++) {
    if (i % 15 == 0) java.push("FIZZBUZZ");
    else if (i % 3 == 0) java.push("Fizz");
    else if (i % 5 == 0) java.push("Buzz");
    else java.push(i);
  }
  container.innerHTML = java
}

btn.addEventListener('click', fizzBuzz)
