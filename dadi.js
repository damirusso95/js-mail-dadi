//  1)Genera due numeri random tra 1 e 6 (inclusi)
//  2)uno per il giocatore e uno per il computer.
//  3)Stabilisci il vincitore, in base a chi ha ottenuto il punteggio più alto.


//1) Creo un array dado player
const dadoPlayer = [
    1,
    2,
    2,
    4,
    5,
    6
];
// numero casuale dado player
let casualePlayer = Math.round(Math.random() * 7);
console.log("punteggio player", dadoPlayer[casualePlayer]);


//1) Creo un array dado computer
const dadoComputer = [
    1,
    2,
    2,
    4,
    5,
    6
];
    // numero casuale dado player
let casualePc = Math.round(Math.random() * 7);
console.log("punteggio computer", dadoComputer[casualePc]);

    // se il dado player < dado di pc
if (casualePlayer < casualePc) {
    console.log("pc win");

    // se il dado player > dado di pc
}
else if (casualePlayer > casualePc) {
    console.log("player win");

    // se il dado player = dado di pc
}
else if (casualePlayer = casualePc) {
    console.log("draw");
}


