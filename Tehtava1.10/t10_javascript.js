const nopat = prompt('Anna noppien lukumäärä: ');

const tavoite = prompt('Anna tavoiteltava summa: ');

let toistot = 1;
let saavutettu = 0;
while (toistot <= 10000) {
  // console.log('saavutettu: ' + saavutettu);
  // console.log('toistot: ' + toistot);
  let sum = 0;
  for (let i = 1; i <= parseInt(nopat); i++) {
    let luku = Math.floor(Math.random() * 6) + 1;
    sum = sum + luku;
    // console.log('summa: ' + sum);
    if (sum === parseInt(tavoite)) {
      saavutettu++;
    }
  }
  toistot++;
}

const todn = (saavutettu / toistot * 100).toFixed(1);
// console.log('todennäköisyys:' + todn);
document.querySelector(
    '#todennakoisyys').innerHTML = `Todennäisyys saada summa ${tavoite} heittämällä ${nopat} noppaa on n. ${todn}%.`;
