 'use strict'

 const syote1 = prompt("Anna ensimmäinen numero:");
const syote2 = prompt("Anna toinen numero:");
const syote3 = prompt("Anna kolmas numero:");

/* console.log(syote1);
 console.log(syote2);
 console.log(syote3); */

 const num1 = parseFloat(syote1);
 const num2 = parseFloat(syote2);
 const num3 = parseFloat(syote3);

 const sum = num1 + num2 + num3;
 // console.log(sum);
 const kerto = num1 * num2 * num3;
 // console.log(kerto);
  const ka = sum / 3;
 // console.log(ka);

 document.querySelector('#summa').innerHTML = `Annettujen lukujen summa on ${sum}.`;
  document.querySelector('#tulo').innerHTML = `Annettujen lukujen tulo on ${kerto}.`;
   document.querySelector('#keskiarvo').innerHTML = `Annettujen lukujen keskiarvo on ${ka}.`;