const nimi = prompt("Anna nimesi: ")

const numero = Math.random() * (5 - 1) + 1;
strNumero = String(numero);
console.log(numero);
valinta = parseInt(strNumero);
console.log(valinta);

if (valinta === 1) {
  paatos = "Rohkelikko";
} else if (valinta === 2) {
  paatos = "Luihuinen";
} else if (valinta === 3) {
  paatos = "Korpinkynsi";
} else if (valinta === 4) {
  paatos = "Puuskupuh";
}

console.log(paatos);

document.querySelector('#tupa').innerHTML = `${nimi} olet ${paatos}!`