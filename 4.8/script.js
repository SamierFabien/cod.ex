const BISEXTILE = "bisextile";
const NORMALE = "normale";

var annee = parseInt(prompt("Veuillez entrer une année :"));
var mois = parseInt(prompt("Veuillez entrer un mois :"));
var jour = parseInt(prompt("Veuillez entrer un jour :"));
var type = null;

if (annee % 4 == 0) {
    if (annee % 100 == 0 && annee % 400 == 0) {
        //Bisextile
        type = BISEXTILE;
    } else if (annee % 100 && !(annee % 400 == 0)) {
        //Normale
        type = NORMALE;
    } else {

    }
} else {
    //Normale
    type = NORMALE;
}

if (mois >= 1 && mois <= 12) {
    
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12) {
        //Mois en 31 jours
        if (jour >= 1 && jour <= 31) {
            //Jour entre 1 et 31
            alert("La date "+jour+"/"+mois+"/"+annee+" est correcte.");
        } else {
            //Jour pas bon
            alert("Erreur : le jour du mois "+mois+" doit être compris entre 1 et 31. Petit con va !");
        }
    } else if (mois == 2) {
        //Février
        if (type == BISEXTILE) {
            //Mois en 29
            if (jour >= 1 && jour <= 29) {
                //Jour entre 1 et 29
                alert("La date "+jour+"/"+mois+"/"+annee+" est correcte.");
            } else {
                //Jour pas bon
                alert("Erreur : le jour du mois "+mois+" doit être compris entre 1 et 29 ("+annee+" est une année bisextile). Petit con va !");
            }
        } else {
            //Mois en 28
            if (jour >= 1 && jour <= 28) {
                //Jour entre 1 et 28
                alert("La date "+jour+"/"+mois+"/"+annee+" est correcte.");
            } else {
                //Jour pas bon
                alert("Erreur : le jour du mois "+mois+" doit être compris entre 1 et 28. Petit con va !");
            }
        }
    } else {
        //Mois en 30
        if (jour >= 1 && jour <= 30) {
            //Jour entre 1 et 30
            alert("La date "+jour+"/"+mois+"/"+annee+" est correcte.");
        } else {
            //Jour pas bon
            alert("Erreur : le jour "+mois+" doit être compris entre 1 et 30. Petit con va !");
        }
    }
} else {
    alert("Erreur : le mois doit être compris entre 1 et 12. Petit con va !");
}