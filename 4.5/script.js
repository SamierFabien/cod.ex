const HOMME_VINGT_ET_PLUS = true;
const FEMME_DIX_HUIT_TRENTE_CINQ = true;

var sexe = prompt("Tapez 'f' si vous êtes une femme, 'h' si vous êtes un homme");
var age = prompt("Quel est votre âge ?");

if (sexe == "f") {
    if (age >=18 && age < 35) {
        alert("Vous êtes éligible à l'impôt.");
    } else {
        alert("Vous n'êtes pas éligible à l'impôt.");
    }
} else {
    if (age >= 20) {
        alert("Vous êtes éligible à l'impôt.");
    } else {
        alert("Vous n'êtes pas éligible à l'impôt.");
    }
}