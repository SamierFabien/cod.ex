const DIX_ET_MOINS = 0.1;
const ONZE_A_TRENTE = 0.09;
const TRENTE_ET_PLUS = 0.08;

var nb = prompt("Combien Voulez-vous de copies ?");

if (nb <= 10) {
    alert("Ces documents vous coûteront : "+nb*DIX_ET_MOINS+"€");
} else if (nb > 10 && nb <= 30) {
    prix = 10*DIX_ET_MOINS+(nb-10)*ONZE_A_TRENTE;
    alert("Ces documents vous coûteront : "+prix+"€");
} else {
    prix = 10*DIX_ET_MOINS+20*ONZE_A_TRENTE+(nb-30)*TRENTE_ET_PLUS;
    alert("Ces documents vous coûteront : "+prix+"€");
}