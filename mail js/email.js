// 1)Chiedi all’utente la sua email
// 2) controllare che sia nella lista di chi può accedere.
// 3)Stampa un messaggio SOLO SE l'utente è in lista.


// chiedo email all'utente
let emailUtente = prompt("inserisci la tua Email")
// console.log(emailUtente);

let verifica = false

// creo una lista di email valide utilizzando un array
let emailValide = [
    "damiano@gmail.com",
    "luca@gmail.com",
    "gino@gmail.com",
    "marco@gmail.com",
    "java@gmail.com",
    "peppe@gmail.com"
];
// console.log(emailValide);


for (i = 0; i < emailValide.length; i++) {
    if (emailValide[i] == emailUtente) {
        verifica = true
    }
    
}

if (verifica == true) {
    console.log("puoi accedere")
}

else {
    console.log("non puoi accedere")
}
