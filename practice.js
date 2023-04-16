const button = document.getElementById('button');

console.log(button);
 
const div = document.getElementsByTagName('div') ;

console.log(div[1]);

const brother = document.getElementsByClassName('brother');

console.log(brother);

const sister = document.querySelectorAll('.sister');
sister.forEach(item=>{
    console.log(item);
});

const me = document.querySelector(".itsMe"); //только один выходит 
console.log(me);
 

const btn = document.querySelector('button');
console.log(btn);