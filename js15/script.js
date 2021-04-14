let nombre = parseInt(prompt("Nombre d'entrées dans le tableau :"));
let tableau = new Array(nombre);

function remplir() {
  for (let index = 0; index < tableau.length; index++) {
    tableau[index] = (prompt("Saisissez la donnée " + (index+1) + "/" + tableau.length + " :"));
  }
}

function lire() {
  for (let index = 0; index < tableau.length; index++) {
    console.log(tableau[index]);
  }
}

remplir();
lire();