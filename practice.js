const restorantData = {
    menu: [
        {
            name: 'Salad Caesar', 
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};


function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) { debugger
let sum =  +fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))
console.log(sum);
    if (sum < average) {debugger
        return 'Цена ниже средней';debugger
    } else {debugger
        return 'Цена выше средней';debugger
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));debugger

function transferWaitors(data) {
    const copy = {...data};

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);