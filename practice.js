'use strict';
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let positiv = data.filter(item => item.amount > 0 );
    let sum = positiv.reduce((s, i) => s + i.amount, 0);
    return sum;
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  return data.some(item => item.amount < 0) ? data.reduce((sum, curr) => sum +curr.amount, 0) : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));