function getInteger(message) {
    return parseInt(prompt(message));
  }
  
  function initTab() {
    let nb = getInteger("Saisissez le nombre d'entrées dans le tableau :");
    tab = new Array(nb);
  }
  
  function saisieTab() {
    for (let i = 0; i < tab.length; i++) {
      tab[i] = getInteger("Saisissez la donnée " + (i+1) + "/" + tab.length + " :");
    }
  }
  
  function afficheTab() {
    console.log("Lecture du tableau :")
    for (let i = 0; i < tab.length; i++) {
      console.log(tab[i]);
    }
  }
  
  function rechercheTab() {
    let nb = getInteger("Saisissez le numéro de l'entrée à lire :");
    console.log("Entrée numéro " + nb + " = " + tab[(nb-1)]);
  }
  
  //fonction de tri ascendant à utiliser avec sort
  function compare(x, y) {
    return x - y;
  }
  
  function infoTab() {
    //tri numérique
    tab.sort(compare);
    //affichage du maximum
    console.log("Le maximum est : " + tab[(tab.length - 1)]);
  
    //Moyenne des nombres
    console.log("Moyenne des nombres du tableau :");
    let moyenne = "(" + tab[0] + "+";//Initialisation avec le 1er nombre dy tableau
    for (let index = 1; index < tab.length; index++) {//On commence donc la boucle avec le deuxièmre nombre du tableau
      if (index == tab.length - 1) {
        moyenne += tab[index] + ")";
      } else {
        moyenne += tab[index] + "+";
      }
    }
    console.log(moyenne + "=" + eval(moyenne));
  }
  
  initTab();
  saisieTab();
  afficheTab();
  rechercheTab();
  infoTab();