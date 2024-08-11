function numeroDeCaracteres(str, caracter) {
    if (caracter.length !== 1) {
        throw new Error("El segundo argumento debe ser un string de un solo carácter.");
    }

    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }

    return contador;
}

