const PAS = "pas assuré";
const ROUGE = "tarif rouge";
const ORANGE = "tarif orange";
const VERT = "tarif vert";
const BLEU = "tarif bleu";

var anciennete = parseInt(prompt("Chez nous depuis plus d'un an ? 0 = non, 1 = oui"));
var accident = parseInt(prompt("Combien d'accident(s) responsable(s) ?"));
var temps = parseInt(prompt("Titulaire du permis depuis plus de 2 ans ? 0 = non, 1 = oui"));
var age = parseInt(prompt("Vous avez 25 ans ou plus ? 0 = non, 1 = oui"));

if (anciennete == 1) {
    alert(BLEU);
} else {
    if (age >= 25) {
        //+25
        if (temps == 1) {
            //+25, +2ans
            if (accident == 0) {
                //+25, 2ans, 0accident
                alert(VERT);
            } else if (accident == 1) {
                //+25, 2ans, 1accident
                alert(ORANGE);
            } else if (accident == 2) {
                //+25, 2ans, 2acccidents
                alert(ROUGE);
            }else if (accident > 2) {
                //+25, 2ans, 2acccidents
                alert(PAS);
            }
        } else {
            //+25, -2ans
            if (accident == 0) {
                //+25, 2ans, 0accident
                alert(ORANGE);
            } else if (accident = 1) {
                //+25, 2ans, 1accident
                alert(ROUGE);
            } else if (accident > 1) {
                //+25, 2ans, 2acccidents
                alert(PAS);
            }
        }
    } else {
        //-25
        if (temps == 1) {
            //+25, +2ans
            if (accident == 0) {
                //+25, 2ans, 0accident
                alert(ROUGE);
            } else if (accident = 1) {
                //+25, 2ans, 1accident
                alert(PAS);
            }
        } else {
            //+25, -2ans
            if (accident == 0) {
                //+25, 2ans, 0accident
                alert(ROUGE);
            } else if (accident > 0) {
                //+25, 2ans, 1accident
                alert(PAS);
            }
        }
    }
}