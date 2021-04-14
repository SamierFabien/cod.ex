let nb = parseInt(prompt("Tapez un nombre entre 10 et 20."));

while (nb < 10 || nb > 20) {
    if (nb < 10) {
        nb = parseInt(prompt("Plus grand !"));
    } else if (nb > 20) {
        nb = parseInt(prompt("Plus petit !"));
    } else {
    }
}