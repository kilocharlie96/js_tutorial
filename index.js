function addMessage(elementId, message) {
  const browserList = document.getElementById(elementId),
      newItem = document.createElement('li');

  newItem.textContent = message;
  browserList.appendChild(newItem);
}

addMessage('browser', 'page loaded, bittch')

document.body.addEventListener('click', function clickedIt() {
  const userList = document.getElementById('user'),
      newItem = document.createElement('li');

  newItem.textContent = 'clicked iiit';
  userList.appendChild(newItem);
});



// ZADANIE #2

function howMuch(pocetProduktov, cenaJedneho) {
  const userList = document.getElementById('user'),
  newItem = document.createElement('li'),

  celkovaCena = pocetProduktov * cenaJedneho;
  
  newItem.textContent = 'Kúpil si ' + pocetProduktov + ' predmetov, za ' + celkovaCena + ' € dokopy.';
  userList.appendChild(newItem);
}

howMuch(5, 1500);



// ZADANIE #3a

document.body.addEventListener('keydown', function moveIt(event){
  const mojArticle = document.querySelector('article'),
  styly = window.getComputedStyle(mojArticle);
  
  if (event.key === 'w') {
    const oldTop = parseInt(styly.top),
    newTop = oldTop - 10;

    mojArticle.style.top = newTop + 'px';

  } else if (event.key === 'a') {
    const oldLeft = parseInt(styly.left),
    newLeft = oldLeft - 10;

    mojArticle.style.left = newLeft + 'px';
  } else if (event.key === 's') {
    const oldTop = parseInt(styly.top),
    newTop = oldTop + 10;

    mojArticle.style.top = newTop + 'px';

  } else if (event.key === 'd') {
    const oldLeft = parseInt(styly.left),
    newLeft = oldLeft + 10;

    mojArticle.style.left = newLeft + 'px';
  }

});



// ZADANIE #3b

function porovnajCisla(a, b) {
  if (a > b) {
    return 'prve cislo je vacsie';
  } else if (a < b) {
    return 'druhe cislo je vacsie';
  } else {
    return 'cisla su rovnake';
  }
}

console.log(porovnajCisla(5, 10));


// ZADANIE #3c
function scitajCisla() {
  const pole1 = [1, 2, 3];

  let sucet = 0;

  for (const n of pole1) {
    sucet += n;
  }

  console.log('sucet je: ' + sucet);
}

scitajCisla();