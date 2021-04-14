let tab = [9, 8, 7, 6, 5, 4, 3, 2];
let passage = 1;

function triABulle(t){
  let permutation = true;

  while (permutation == true) {
    console.log("fonction tri n°" + passage);
    permutation = false;
    for (let i = 0; i < t.length - 1; i++) {
      console.log("    tri de ligne n°" + (i+1));
      console.log("        boucle do <<< boucle for | t[i] = " + t[i] + " t[(i+1)] = " + t[(i+1)] + " | permutation = " + permutation);
      if (t[i] > t[(i+1)]) {
        let echange = t[i];
        let echangePlusUn = t[(i+1)];
        t[i] = echangePlusUn;
        t[(i+1)] = echange;
        permutation = true;
        console.log("        boucle do <<< boucle for <<< if | i>(i+1) | t[i] = " + t[i] + " t[(i+1)] = " + t[(i+1)] + " | permutation = " + permutation);
        afficher(t);
      } else {
        console.log("        boucle do <<< boucle for <<< else | t[i] = " + t[i] + " t[(i+1)] = " + t[(i+1)] + " | permutation = " + permutation);
        afficher(t);
      }
    }
    afficher(t);
    passage++;
  }
}

function afficher(t) {
  let ligne = t[0] + ";";
  for (let i = 1; i < t.length; i++) {
    ligne += t[i] + ";";
  }
  console.log("        Contenu du tableau : " + ligne);
}

//afficher(tab);
triABulle(tab);