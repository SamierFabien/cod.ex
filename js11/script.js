let chaine = prompt("Veuillez saisir un mot");
let tableau = [];
let compteur = 0;

chaine.substr(0, chaine.length);

for (let index = 0; index < chaine.length; index++) {
  tableau.push(chaine.substr(index, 1));
}

for (const iterator of tableau) {
  if (iterator == "a" || iterator == "e" || iterator == "i" || iterator == "o" || iterator == "u" || iterator == "y") {
    compteur++;
  }
}

console.log("Il y a "+compteur+" voyelles dans le mot : "+chaine);