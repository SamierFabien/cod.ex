let names = [];
let name = null;

do {
  name = prompt("Veuillez taper un nom :");
  if (name != "") {
    names.push(name);
  }
} while (name != "");

console.log("Vous avez saisi " + names.length + " prénoms.");
for (const element of names) {
  console.log(element);
}