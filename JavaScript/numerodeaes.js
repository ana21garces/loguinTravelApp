function numeroDeAes(str) {
    let contador = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    
    return contador;
}

