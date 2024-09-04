function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0;
    let b = 1;

    while (a < num) {
        let temporary = a + b;
        a = b;
        b = temporary;
    }

    if (a === num) {
        console.log(`O número ${num} pertence a sequência de Fibonacci!`);
    } else {
        console.log(`O número ${num} não pertence a sequência de Fibonacci!`);
    }
}

isFibonacci(  233 /*Informe o número aqui*/);
