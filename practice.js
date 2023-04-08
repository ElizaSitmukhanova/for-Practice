/* 
 function thirdTask() {
     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
     const data = [5, 10, 'Shopping', 20, 'Homework'];
     let result = [];

     for(let i=1; i<data.length; i++) {
          result[i - 1] = data[data.length - i]
     }
  return console.log(result)
 }
 thirdTask() */


 const lines = 5;
 let result = '';
 
 for (let i = 0; i <= lines; i++) {
     for (let j = 0; j < lines-i; j++) {
         result += " ";
     }
     for (let j = 0; j < 2*i; j++) {
         result += "*";
     }
     result += "\n";
 }
 
 console.log(result)