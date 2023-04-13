const family = ['Peter', 'Ann', 'Alex', 'Linda'];


function showFamily(arr) {
    let names = arr.slice().join(' ');
    let str = '';
    if (arr.length === 0) {
        str = 'Семья пуста'
    } else {
        str = `Семья состоит из: ${names}`;
    }
    return console.log(str)
}

showFamily(family);
/* function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
} */
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
    arr.forEach(element => {
         console.log(element.toLowerCase())
    });
    
}

standardizeStrings(favoriteCities);