//Moyenne des nombres
console.log("Moyenne des nombres entiers :");
let moyenne = "(" + entiers[0] + "+";//Initialisation avec le 1er nombre dy tableau
for (let index = 1; index < entiers.length; index++) {//On commence donc la boucle avec le deuxièmre nombre du tableau
  if (index == entiers.length - 1) {
    moyenne += entiers[index] + ")";
  } else {
    moyenne += entiers[index] + "+";
  }
}

moyenne += "/" + entiers.length;
console.log(moyenne + "=");
console.log(eval(moyenne));