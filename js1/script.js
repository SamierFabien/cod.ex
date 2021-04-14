let name = prompt("Quel est votre nom ?");
let forname = prompt("Qul est votre prénom");

if (confirm("Etes-vous un homme ?")) {
  alert("Bonjour M. " + name + " " + forname + ", bienvenue sur notre site web !");
} else {
  alert("Bonjour Mme. " + name + " " + forname + ", bienvenue sur notre site web !");
}