function inverterString(str) {
    let resultado = '';

    for(let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
};

const string = "Testando a função"; // Edite aqui 
const stringInvertida = inverterString(string);

console.log(`String Original: ${string}`);
console.log(`String Invertida: ${stringInvertida}`);