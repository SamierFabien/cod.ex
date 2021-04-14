let nbBase = parseInt(prompt("Tapez un nombre entier."));
let compteur = 1;
let resultat = 1;

while (compteur < nbBase + 1) {
    resultat *= compteur;
    compteur++;
}

alert("Résulat = "+resultat);