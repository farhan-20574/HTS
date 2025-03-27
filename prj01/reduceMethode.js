"use strict";
const shoppingCart = [
    { name: 'bread', price: 120 },
    { name: 'eggs', price: 100 },
    { name: 'Milk', price: 200 }
];
const result = shoppingCart.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.price);
}, 0);
console.log(result);
