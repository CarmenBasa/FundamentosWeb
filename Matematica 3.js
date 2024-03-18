
let statement1 = "El peso de Juan es mayor que el peso de María.";
let weightJohn = 70;
let weightMaria = 65;

let weightComparison = weightJohn > weightMaria;


let statement2 = "La altura de Pedro es igual a la altura de Ana.";
let heightPedro = 180;
let heightAna = 180;

let heightComparison = heightPedro === heightAna;


let statement3 = "La contraseña ingresada coincide con la contraseña almacenada.";
let enteredPassword = "secreto123";
let storedPassword = "secreto123";

let pwdMatch = enteredPassword === storedPassword;

// Pruebas
console.log(statement1, weightComparison);
console.log(statement2, heightComparison);
console.log(statement3, pwdMatch);