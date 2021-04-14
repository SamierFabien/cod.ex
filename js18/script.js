let tableau = [];

function accueil() {
    alert("Ce programme permet d'additionner des nombres et d'en faire la moyenne.");
}

function ajouter(tab) {
    let nombre;

    while (nombre != 0) {
        nombre = parseFloat(prompt("Saisissez le nombre numéro " + (tab.length+1) + " ou tapez 0 pour arrêter et obtenir les résultats."));
        if (verifier(nombre) && nombre != 0) {
            tab.push(nombre);
        } else if (verifier(nombre) && nombre == 0) {
            if (confirm("Voulez-vous arrêter la saisie et voir les résultats ?")) {
                nombre = 0;
            } else {
                nombre = null;
            }
        } else {
            console.log("\"" + nombre + "\" n'est pas un nombre.");
        }
    }0

    
}

function verifier(x) {
    return (!isNaN(x) && isFinite(x) ? true : false);
}

function afficherNombre(tab) {
    console.log("Vous avez saisi " + tab.length + " nombres.")
}

function somme(tab) {
    let somme = 0;
    for (const element of tab) {
        somme += element;
    }
    return somme;
}

function moyenne(tab) {
    return somme(tab) / tab.length;
}

accueil();
ajouter(tableau);
afficherNombre(tableau);
console.log("La somme de tous les nombres est égal à " + somme(tableau) + ".");
console.log("La moyenne de tous les nombres est égale à " + moyenne(tableau) + ".");