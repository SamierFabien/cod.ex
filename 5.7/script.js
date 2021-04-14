let compteur = 1;
let plusGrand = -9999;
let numeroVar = 0;

while (compteur < 21) {
    let actuel = parseInt(prompt("tapez un nombre :"));
    if (actuel > plusGrand) {
        plusGrand = actuel;
        numeroVar = compteur;
    }
    compteur++;
}

alert("Le nombre le plus grand est "+plusGrand+", c'était le numéro :"+numeroVar);