"use strict";


function firstTask() {
     const arr = [3, 5, 8, 16, 20, 23, 50];
     let result = [];
  for (let i=0; i<arr.length; i++) { 
     result += arr[i] +','
  }
    
     return console.log(result);
 }

firstTask();

/* function secondTask() {
     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
     const data = [5, 10, 'Shopping', 20, 'Homework'];
     for(let i=0; i<data.length; i++) {
          if (typeof(data[i])==='number') {
               data[i]= data[i]*2
          } else if (typeof(data[i]) ==='string') {
               data[i]=`${data[i]} - done`;
          }
     }
  console.log(data);
  return data
 }
 secondTask()
 */

 function thirdTask() {
     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
     const data = [5, 10, 'Shopping', 20, 'Homework'];
     let result = [];

     for(let i=0; i<data.length; i++) {
          result += data[i];
     }
  return console.log(result)
 }
 thirdTask()