let nbUn = parseInt(prompt("Veuillez saisir un nombre :"));
let nbDeux = parseInt(prompt("Veuillez saisir un deuxième nombre :"));

function produit(un, deux) {
  return un * deux;
}

function versConsole() {
  console.log("Le produit de "+nbUn+" et "+nbDeux+" est égal à "+produit(nbUn, nbDeux));
}

function afficherImage(chemin) {
  document.getElementById("texte").innerHTML = "<img src\""+chemin+"\" alt=\"Une image de papillon\"></br>";
}

function afficherCalcul(){
  document.getElementById("texte").innerHTML += "Le produit de "+nbUn+" et de "+nbDeux+" est égal à "+produit(nbUn, nbDeux);
}

afficherImage("papillon.jpg");
afficherCalcul();