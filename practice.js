'use strict';

const btn = document.querySelector('button');
// сам элемент
/* btn.addEventListener('click', function() {
    console.log(this); 
}) */

/* btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
}); */


//в стредлочной функции контекста нет, this undefined
/* btn.addEventListener('click', () => {
    this.style.backgroundColor = 'red';
}); */

// поэnому использует e.target
btn.addEventListener('click', (e) => {
   e.target.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

const double = a =>  a * 2;
console.log(double(5));