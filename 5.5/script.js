let nbBase = parseInt(prompt("Tapez un nombre entier."));
let compteur = 1;
let resultat = 0;

while (compteur < nbBase + 1) {
    resultat += compteur;
    compteur++;
}

alert("Résulat = "+resultat);