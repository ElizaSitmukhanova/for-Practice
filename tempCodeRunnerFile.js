 function fib(num) {
    if (typeof(num) != 'number' || num<=0 || !Number.isInteger(num)) {
        return ''
    }

    let result = '';
    let first = 0;
    let second = 1;

    for(let i=0; i<num; num++) {
         if(num === i+1) {
            result +=`${first}`;
         } else {
            result += `${first} `;
         }

         let third = first + second;
         first = second;
         second = third;
    }
    return result;
 }
    

console.log(fib(2)) 
