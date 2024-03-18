// Declarar una variable myName
var myName;

// Darle a myName un valor
myName = "Carmen";

// Declarar una variable llamada myAge y darle valor en la misma linea
var myAge = 18;

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);