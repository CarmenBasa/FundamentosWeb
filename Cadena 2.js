// Cadena original
let quote = "No me gustan los huevos verdes y el jamón";

// Subcadena
let substring = "verdes";

// Longitud de la cita original
let quoteLength = quote.length;

// Posición del índice donde aparece substring en quote
let index = quote.indexOf(substring);

// Recortar la cita original para obtener la cita revisada
let revisedQuote = quote.slice(0, index) + substring + quote.slice(index + substring.length);

// Imprimir la cita revisada
console.log(revisedQuote);