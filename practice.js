'use strict';

//filter

/* const names = ["Ivan", "Kseniya", "Ann", "Innokentiy"];
const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames); */

//map

/* const answers = ['IvanA', 'AnnA', "Hello"];

const answersRes = answers.map(item => {
    return item.toLowerCase();
});

console.log(answersRes); */

//every/some

/* const some = [4, 'dfg', 'fgdgdsgv'];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number')); */

//reduce

/* const arr = [4, 5, 8, 19];

const result = arr.reduce((sum, current) => {
    return sum - current, 150;
});
console.log(result);

const str = ['apple', 'pear', 'plum'];
const res = str.reduce((sum, current) => {
    return `${sum}, ${current}`;
});
console.log(res);
 */

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj).filter(item => item[1]==='persone').map(item => item[0]);
console.log(newArr);

 