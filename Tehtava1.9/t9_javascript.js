/* Write a program that asks the user for an integer and tells if the number
is a prime number. (2p)
 */
/* Prime numbers are numbers that are only divisible by 1 and itself.
For example, number 13 is a prime number as it can only be divided by 1 or 13
so that the result is an integer.
On the other hand, number 21 for example is not a prime number as it can be
also be divided by numbers 3 and 7.
Print the result on the HTML document. */

const luku = prompt('Syötä luku: ');
let jaa = 2;
let lopeta = false;

while (lopeta === false) {
  let jakojaannos = parseInt(luku) % jaa;
  if (jakojaannos === 0 && jaa < parseInt(luku)) {
    console.log(luku);
    document.querySelector('#luku').innerHTML = `Luku ${luku} ei ole alkuluku.`;
    lopeta = true;
  } else if (jakojaannos === 0 && jaa === parseInt(luku)) {
    console.log(luku);
    document.querySelector('#luku').innerHTML = `Luku ${luku} on alkuluku.`;
    lopeta = true;
  }
  jaa++;
}