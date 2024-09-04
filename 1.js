function sumValue(Index, Sum, K) {
    Index = 13;
    Sum = 0;
    K = 0;

    while (K < Index) {
        K = K +1;
        Sum = Sum + K;
    }

    return console.log(Sum);
}

sumValue();