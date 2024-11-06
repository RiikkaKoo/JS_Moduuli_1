/* Write a program that asks the user to enter a year and notifies the
user whether the input year is a leap year. A year is a leap year if it is
divisible by four. However, years divisible by 100 are leap years only if they
are also divisible by 400. Print the result on the HTML document. (3p)
 */

'use strict';

const vuosi = prompt('Syötä vuosi: ');

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
  console.log(`${vuosi} on karkausvuosi`);
  document.querySelector(
      '#vastaus').innerHTML = `Vuosi ${vuosi} on karkausvuosi.`;
} else {
  console.log(`${vuosi} ei ole karkausvuosi`);
  document.querySelector(
      '#vastaus').innerHTML = `Vuosi ${vuosi} ei ole karkausvuosi.`;
}
