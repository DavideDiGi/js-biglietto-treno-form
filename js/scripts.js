
// let kilometers = prompt("Quanti chilometri devi percorrere?");
// let age = prompt("Quanti anni hai?");

// console.log("chilometri: " + kilometers);
// console.log("anni: " + age);

let nameInput = document.getElementById("name-input");
let kmInput = document.getElementById("km-input");
let ageSelect = document.getElementById("age-select");
let createButton = document.getElementById("create-button");
let deleteButton = document.getElementById("delete-button");

let ticketPrice;


createButton.addEventListener('click',

    function() {
        console.log("cliccato su Genera")
        console.log("Il nome dell'utente è:", nameInput.value);
        console.log("I km da percorrere sono:", kmInput.value);
        console.log("Il conducente è:", ageSelect);
    }

)


// ticketPrice = 0.21 * kilometers;

// console.log("prezzo del biglietto: " + ticketPrice +"€");


// let youngerPrice;
// let olderPrice;

// if (age < 18) {
//     youngerPrice = (ticketPrice - (ticketPrice * 20) / 100);

//     youngerPrice = youngerPrice.toFixed(2);

    // document.getElementById("final-price").innerHTML = "prezzo del biglietto con sconto giovani: " + youngerPrice + "€" ;

//     console.log("prezzo scontato : " + youngerPrice + "€");

// }

// else if (age >= 65) {
//     olderPrice = (ticketPrice - (ticketPrice * 40) / 100);

//     olderPrice = olderPrice.toFixed(2);

//     // document.getElementById("final-price").innerHTML = "prezzo del biglietto con sconto pensionati: " + olderPrice + "€" ;

//     console.log("prezzo scontato : " + olderPrice + "€");
// }

// else{
//     // document.getElementById("final-price").innerHTML = "prezzo del biglietto: " + ticketPrice + "€" ;

//     console.log("prezzo del biglietto: " + ticketPrice + "€");
// }




































