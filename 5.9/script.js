const DIX = 10;
const CINQ = 5;
const UN = 1;


let somme = 0;
let paye = 0;
let du = 0;

while (0 == 0) {
    let prixArticle = parseInt(prompt("Prix de l'article :"));
    somme += prixArticle;
    if (prixArticle == 0) {
        break;
    }
}

paye = parseInt(prompt("Le prix total est  de "+somme+". Vous payez :"));
du = paye - somme;
alert("Somme due = "+du);
while (du > 0) {
    if (du > DIX) {
        du -= DIX;
        alert("Rendu 10€, il reste : "+du+"€");
    } else if (du < DIX && du >= 5) {
        du -= CINQ;
        alert("Rendu 5€, il reste : "+du+"€");
    } else if (du < CINQ && du > 0){
        du -= UN;
        alert("Rendu 1€, il reste : "+du+"€");
    } else {
        break;
    }
}

alert("Merci, Bonne journée.");