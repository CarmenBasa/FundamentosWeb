//Cambie const por var para aclarar que es una variable y no una constante
var myName = 'Default';
myName = 'Chris';

//La segunda correccion fue quitar los '' del 42 por que al dejarlos se suma un texto con un numero, al quitarlos el codigo entiende que se suman 2 valores
let myAge = 42;

para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;