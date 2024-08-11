
function likes(numero) {
    if (numero < 1000) {
        return numero.toString();
    } else if (numero >= 1000 && numero < 1000000) {
        return Math.floor(numero / 1000) + 'K';
    } else if (numero >= 1000000) {
        return Math.floor(numero / 1000000) + 'M';
    }
}
