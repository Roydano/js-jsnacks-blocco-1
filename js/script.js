
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga. ------ok


// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. Esegui questo programma in due versioni, con il for e con il while. ------ok


// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array ------ok


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



// JSNACK 1

var firstWord = prompt('Inserisci la prima parola');
var secondWord = prompt('Inserisci la seconda parola');
var message = 'Le due parole hanno la stessa lunghezza : ' + firstWord + ' & ' + secondWord;

if (firstWord.length < secondWord.length){
    message = 'La parola più lunga è: ' + secondWord;
} else if (firstWord.length > secondWord.length){
    message = 'La parola più lunga è: ' + firstWord;
}

document.getElementById('word').innerHTML = message;




// JSNACK 2

// METODO CON CICLO FOR

var userNumber;
var somma = 0;

for (var i = 0; i < 5; i++){
    userNumber = parseInt (prompt('Inserisci un numero'));
    somma += userNumber;
}

document.getElementById('somma-for').innerHTML = 'La somma dei tuoi numeri con il ciclo For è: ' + somma;


// METODO CON CICLO WHILE

var userNumber;
var somma = 0;
var i = 0;

while(i < 5){
    i++;
    userNumber = parseInt (prompt('Inserisci un numero'));
    somma += userNumber;
}

document.getElementById('somma-while').innerHTML = 'La somma dei tuoi numeri con il ciclo While è: ' + somma;


//JSNACK 3

var numeri = [];

for (var i = 0; i < 6; i++){
    userNumber = parseInt (prompt('Inserisci un numero'));
    if(userNumber % 2 != 0){
        numeri.push(userNumber)
    }
}

document.getElementById('dispari').innerHTML = 'I numeri dispari che hai inserito sono: ' + numeri;


//JSNACK 4

