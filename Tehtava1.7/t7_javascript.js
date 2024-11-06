/* Write a program that rolls user defined number of dice and displays the sum
of the results of the dice rolls.(2p)
 */
/* - First, program asks the user for the number of dice rolls.
   - Then the program throws a die as many times as the user defined.
   - Print the sum of the results in the console or in the HTML document.*/

const kertoja = prompt('Kuinka monta kertaa noppaa heitetään?: ');

let max = 6;
let min = 1;
let summa = 0;
for (let h = 1; h <= kertoja; h++) {
  // console.log(`heitto: ${h}`);
  const heitto = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log(`luku: ${heitto}`);
  summa += heitto;
  // console.log(`summa: ${summa}`);
}

// Tulostetaan tieto heittojen summasta konsolille:
console.log(`Heittojen summa on ${summa}.`);


