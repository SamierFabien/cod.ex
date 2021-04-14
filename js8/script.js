let entiers = [];
let donnee;


//Saisie des nombres
do {
  donnee = parseInt(prompt("Veuillez saisir un nombre entier :"));
  if (donnee != 0 && donnee != null && !isNaN(donnee)) {
    entiers.push(donnee);
  }
} while (donnee != 0);

console.log("Liste des nombres entiers :");
for (const iterator of entiers) {
  console.log(iterator);
}

//Somme des nombres
console.log("Somme des nombres entiers :");
let somme = entiers[0] + "+";//Initialisation avec le 1er nombre dy tableau
for (let index = 1; index < entiers.length; index++) {//On commence donc la boucle avec le deuxièmre nombre du tableau
  if (index == entiers.length - 1) {
    somme += entiers[index];//dernier nombre du tableau : pas de "+"
  } else {
    somme += entiers[index] + "+";
  }
}

console.log(somme + "=");
console.log(eval(somme));