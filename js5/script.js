let nbUn = parseInt(prompt("Veuillez saisir un nombre :"));
let operateur = prompt("Veuillez saisir l'opération souhaitée : (+-*/)");
let nbDeux = parseInt(prompt("Veuillez saisir un nombre :"));

if (nbUn != 0 || nbDeux != 0) {
  alert(eval(nbUn + operateur + nbDeux));
} else {
  if (operateur == "/") {
    alert("On ne divise pas 0 par 0.");
  } else {
    alert(eval(nbUn + operateur + nbDeux));
  }
}