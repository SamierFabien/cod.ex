let nb = parseInt(prompt("Tapez 1, 2 ou 3 :"));

while (nb < 1 || nb > 3) {
    nb = parseInt(prompt("Erreur : Tapez un nombre entier compris entre 1 et 3 :"));
}