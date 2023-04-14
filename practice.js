 const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== "string") {
        return console.log('Error');
    }
    let arr = str.split('').reverse().join('');
    return console.log(arr);
}

reverse(someString); 

 const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(element, index) {
        if (missingCurr !== element) {
            str+=`${element}\n`;
        }
    })
  return console.log(str)
}

   availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR');


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = square * data.height;
    let totalConsumption = volume * data.moneyPer1m3;

    if (data.budget - totalConsumption >= 0) {
        return console.log('Бюджета достаточно');
    } else {
        return console.log('Бюджета недостаточно');
    }
}

isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris',  'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
   let newArr = arr.sort();
   let oneGr = [];
   let twoGr = [];
   let threeGr = [];
   let fourGr = 'Оставшиеся студенты:'
   oneGr = newArr.slice(0, 3);
   twoGr = newArr.slice(3, 6);
   threeGr = newArr.slice(6, 9);
   fourGr = newArr.slice(9)

   return console.log([oneGr, twoGr, threeGr, `Оставшиеся студенты: ${fourGr.length === 0 ? '-' : fourGr.join(', ')}`]);
}

sortStudentsByGroups(students);


// или такой способ 
function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}