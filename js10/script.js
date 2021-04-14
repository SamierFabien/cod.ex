let nombre = parseInt(prompt("Saisissez un nombre entier :"));
let multiplicateurs = parseInt(prompt("Saisissez le nombre de multiplicateurs"));

for (let index = 0; index < multiplicateurs; index++) {
  let operationAAfficher = index+"x"+nombre+"=";
  let operationACalculer = index+"*"+nombre;
  console.log(operationAAfficher + eval(operationACalculer));
}