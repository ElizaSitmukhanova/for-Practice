'use strict';
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];


/* function showGoodFilms(arr) {
    let res = arr.filter(item=> item.rating >= 8);
   return res;
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    let res = arr.map(item=> item.name).join(', ');
   return res; 
}
console.log(showListOfFilms(films));
 */
function setFilmsIds(arr) {
return arr.map((film, item) =>{
        film.id = item; 
    return film;
 });
}
console.log( setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
 return arr.every(film => film.id || film.id === 0 );
}

console.log(checkFilms(tranformedArray));
 