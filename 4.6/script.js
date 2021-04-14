var candidatUn = parseInt(prompt("Veuillez entrer le nombre de votes pour le candidat 1"));//300
var candidatDeux = parseInt(prompt("Veuillez entrer le nombre de votes pour le candidat 2"));//100
var candidatTrois = parseInt(prompt("Veuillez entrer le nombre de votes pour le candidat 3"));//100
var candidatQuatre = parseInt(prompt("Veuillez entrer le nombre de votes pour le candidat 4"));//100


var nbVotes = candidatUn+candidatDeux+candidatTrois+candidatQuatre;
var rapport = nbVotes / candidatUn;
var pourcentage = 100 / rapport;

const tableau = [candidatUn, candidatDeux, candidatTrois, candidatQuatre];
tableau.sort();

if (pourcentage > 50) {
    alert("Candidat numéro un élu au premier tour avec "+pourcentage+"% des votes.");
} else {
    if (pourcentage >= 12.5) {
        if (tableau[0] = candidatUn) {
            alert("Candidat numéro un : ballotage favorable avec "+pourcentage+"% des votes.");
        } else {
            alert("Candidat numéro un : ballotage défavorable avec "+pourcentage+"% des votes.");
        }
    } else {
        alert("Candidat numéro un : ne passe pas au second tour avec "+pourcentage+"% des votes.");
    }
}