"use strict";

const btns = document.querySelectorAll('button');
/* console.log(btns[0].classList.length); //количество классов 2
console.log(btns[0].classList.item(0)); // blue name of class
console.log(btns[1].classList.length); // 0 классов
console.log(btns[1].classList.add("red"));
console.log(btns[0].classList.remove("blue"));
console.log(btns[0].classList.toggle("blue"));

if (btns[1].classList.contains('red')) {
    console.log('red');
} */

btns[0].addEventListener('click', () => {
/* if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
} else {
    btns[1].classList.remove('red');
} */

btns[1].classList.toggle('red');
});

