let chevauxPartants = parseInt(prompt("Nombre de chevaux partants :"));
let chevauxJoues = parseInt(prompt("Nombre de chevaux joués :"));

//Dans l’ordre : une chance sur X de gagner
//Dans le désordre : une chance sur Y de gagner

// La fonction Factorielle (version récursive)
function factorielle(n) {
    let res = 1;
    for (let i = 2; i < n + 1; i++) {
      res = res * i;
    }
    return res
}

let x = factorielle(chevauxPartants) / factorielle(chevauxPartants - chevauxJoues);
alert("Dans l’ordre : une chance sur "+x+" de gagner");

let y = factorielle(chevauxPartants) / (factorielle(chevauxJoues) * factorielle(chevauxPartants - chevauxJoues));
alert("Dans le désordre : une chance sur "+y+" de gagner");