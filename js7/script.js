let nombre = [];
let donnee = null;
let limite = parseInt(prompt("Veuillez saisir la limite supérieure des nombres à trier :"));

do {
  donnee = parseInt(prompt("Veuillez saisir une nombre entier :"));
  if (donnee != "") {
    nombre.push(donnee);
  }
} while (donnee != "");

console.log("Voici les nombres plus petits que " + limite + " :");
for (const element of nombre) {
  if (element < limite) {
    console.log(element);
  }
}