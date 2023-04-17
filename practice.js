const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    wrapper = document.querySelector(".wrapper"),
    circles = document.getElementsByClassName('circle'),
    hearts = wrapper.querySelectorAll('.heart'), //псевдомассив и есть метод forEach
    oneHeart = wrapper.querySelector('.heart');

/* box.style.backgroundColor = 'blue';
box.style.width= '500px'; */
btns[1].style.borderRadius = '100%';
//btns.style.backgroundColor = 'black'; //error

//чтобы назначить несколько
box.style.cssText = 'background-color: black; width: 500px';

/* for (let i = 0; i<hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';

} */

hearts.forEach(item =>{
item.style.backgroundColor = 'blue';
});

const div =document.createElement('div');
//const text = document.createTextNode('i am here');

div.classList.add('black');

//document.body.append(div);
// document.querySelector(".wrapper").append(div);
wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// hearts[0].after(div);

 circles[0].remove() 

// hearts[0].replaceWith(circles[0]); 

//устаревшие методы, но которые стоит знать

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.removeChild(hearts[1]); delete 
//  wrapper.replaceChild(circles[0], hearts[0]);


 div.innerHTML = '<h1> Hello World </h1>';

// div.textContent= 'Hello';

div.insertAdjacentHTML('afterend', "<h2> hi </h2>")

