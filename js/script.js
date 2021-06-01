// Riscrivete gli snack fatti in classe apportando le correzioni viste assieme stamattina, più quelli nuovi.


// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. Esegui questo programma in due versioni, con il for e con il while.


// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array


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
