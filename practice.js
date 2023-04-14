/* const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== "string") {
        return console.log('Error');
    }
    let arr = str.split('').reverse().join('');
    return console.log(arr);
}

reverse(someString); */

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
