const { _ } = require("core-js");

const btnPhone = document.querySelector('#iphone'),
      btnMacBook =document.querySelector('#macbook'),
      images = document.querySelectorAll('img');


      let phoneAnimation;
      btnPhone.addEventListener('click', () => {
        if(!phoneAnimation){
          phoneAnimation = images[0].animate([
            {transform: 'translateY(0) rotate(0deg',
          filter: 'opacity(100%)'},
            {transform: 'translateY(200px) rotate(180deg', 
            filter: 'opacity(50%)'},
            {transform: 'translateY(-20px) rotate(270deg',
            filter: 'opacity(75%)'},
            {transform: 'translateY(0) rotate(360deg',
            filter: 'opacity(100%)'},
          ],{
            duration: 3000,
            iterations: Infinity
          });
        } else if (phoneAnimation.playState === 'paused') {
          phoneAnimation.play();
        } else {
          phoneAnimation.pause();
        }
      });
 