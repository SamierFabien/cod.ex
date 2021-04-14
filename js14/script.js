let phrase = prompt("Saisissez une phrase :");
let nombre = prompt("Saisissez le numéro du mot choisi :");

function strtok(texte, separateur, numero) {
  let mots = texte.split(separateur);
  return mots[numero - 1];
}

alert(strtok(phrase, " ", nombre));