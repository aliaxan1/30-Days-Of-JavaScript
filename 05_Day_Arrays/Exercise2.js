//1
const countries = require("./countries");
const webTechs = require("./web_techs");

console.log(countries);
//2
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let alergicStatus = true;


if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
if (shoppingCart.includes('Honey') && alergicStatus) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'),1);    
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);
//4
//5
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
