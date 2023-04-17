
const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');


/* btn.onclick= function() {
   alert('djfisjfids')
} */

/* btn.addEventListener('click', (e) =>{
    e.target.remove();
}) */

/* btn.addEventListener('click', () =>{
    alert('second click');
}) */
/* let i = 0;
const deleteElement = (e) =>{
    console.log(e.target);
    i++;
    if(i==2) {
        btn.removeEventListener('click', deleteElement);
    }
}; */

const deleteElement = (e) =>{
    console.log(e.currentTarget);
   console.log(e.type);
};
/* btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); */

const link = document.querySelector('a');

link.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log(event.target);

})

    //чтобы навесить несколько обработчтиков событии на кнопки все 
    const btns = document.querySelectorAll('button');

    btns.forEach((btn) =>{
        btn.addEventListener('click', deleteElement, {once: true});
    });