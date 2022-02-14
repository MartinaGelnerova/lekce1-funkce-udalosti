// tady je místo pro náš program


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}
document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  let upozorneni = "Gratulace, právě jsi spustila tuto funkci!";
  let cvterecek = document.querySelector('.ctverecek');
  alert(upozorneni);
  console.log(upozorneni);
  cvterecek.textContent = upozorneni;
  cvterecek.style.width = '400px'
}

function colorChange() {
  let cvterecek = document.querySelector('.ctverecek');
  cvterecek.style.backgroundColor = 'green';
}

vysledek.style.display = 'none';

function showVysledek() {
  vysledek.style.display = 'inline';
}