var heures = prompt("Veuillez saisir l'heure :");
var minutes = prompt("Veuillez saisir les minutes :");
var secondes = prompt("Veuillez saisir les secondes :");

if (secondes < 59) {
    secondes++;
} else {
    if (minutes < 59) {
        secondes = 0;
        minutes++;
    } else {
        if (heures < 23) {
            secondes = 0;
            minutes = 0;
            heures++;
        } else {
            heures = 0;
            minutes = 0;
            secondes = 0;
        }
        
    }
}

alert("Dans une minute, il sera : "+heures+"h"+minutes+"mn"+secondes+"s .");
