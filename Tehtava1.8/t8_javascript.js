/* Write a program that prompts the user for the start and end year.
The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document. (3p)
 */

const alku = prompt('Anna aloitusvuosi: ');
const loppu = prompt('Anna lopetusvuosi: ');

document.querySelector(
    '#syote').innerHTML = `Listataan karkausvuodet vuoden ${alku} ja vuoden ${loppu} väliltä: `;
let vuosi = parseInt(alku);

while (vuosi <= parseInt(loppu)) {
  if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    // console.log(`${vuosi} on karkausvuosi`);
    document.querySelector('#vuodet').innerHTML += `<li>${vuosi}</li>`;
  }
  vuosi++;
}
