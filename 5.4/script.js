let nb = parseInt(prompt("Tapez un nombre entier."));

let compteur = 0;

while (compteur < 10) {
    compteur++;
    let resultat = nb * compteur;
    alert(nb+"x"+compteur+"="+resultat);
}