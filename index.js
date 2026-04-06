// Po nacitaní stránky sa do elementu s id "browser" pridá nový element "li" s textom "page loaded, bittch". 
function addMessage(elementId, message) {
  const browserList = document.getElementById(elementId),
      newItem = document.createElement('li');

  newItem.textContent = message;
  browserList.appendChild(newItem);
}

addMessage('browser', 'page loaded, bittch');


// Po kliknutí na stránku sa do elementu s id "user" pridá nový element "li" s textom "clicked iiit".
document.body.addEventListener('click', function clickedIt() {
  const userList = document.getElementById('user'),
      newItem = document.createElement('li');

  newItem.textContent = 'clicked iiit';
  userList.appendChild(newItem);
});



// ZADANIE #2: Sprav funkciu, ktora dostane 2 cisla a vypise kolko si kupil predmetov a kolko ta to dokopy stalo

function howMuch(pocetProduktov, cenaJedneho) {
  const userList = document.getElementById('user'),
  newItem = document.createElement('li'),

  celkovaCena = pocetProduktov * cenaJedneho;
  
  newItem.textContent = 'Kúpil si ' + pocetProduktov + ' predmetov, za ' + celkovaCena + ' € dokopy.';
  userList.appendChild(newItem);
}

howMuch(5, 1500);



// ZADANIE #3a: Sprav lietanie hore dole a diagonálne

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



// ZADANIE #3b: Sprav funkciu, ktora dostane 2 cisla a vypise vacsie z nich

function porovnajCisla(a, b) {
  if (a > b) {
    return 'prve cislo je vacsie';
  } else if (a < b) {
    return 'druhe cislo je vacsie';
  } else {
    return 'cisla su rovnake';
  }
}

// console.log(porovnajCisla(5, 10));


// ZADANIE #3c: Sprav funkciu, kam posles pole s cislami a ona vypocita ich sucet
function scitajCisla(pole) {
  let sucet = 0;

  for (const n of pole) {
    sucet += n;
  }

  console.log('sucet je: ' + sucet);
}

// scitajCisla([1, 2, 3, 4, 5]);



// ZADANIE #3d: Sprav funkciu, ktora vypise iba kazdu druhu hodnotu z pola
function vypisKazdeDruheCislo(pole) {
  for (let i = 1; i < pole.length; i += 2) {
    console.log(pole[i]);
  }
}

// vypisKazdeDruheCislo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);