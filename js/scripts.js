let nameInput = document.getElementById("name-input");
let kmInput = document.getElementById("km-input");
let ageSelect = document.getElementById("age-select");
let createButton = document.getElementById("create-button");
let deleteButton = document.getElementById("delete-button");

let invisibleContainer = document.getElementById("invisible-container");
let passengerName = document.getElementById("passenger-name");

let ticketPrice;

ageSelect.value = "";

createButton.addEventListener('click',

    function() {
        // console.log("cliccato su Genera")
        // console.log("Il nome dell'utente è:", nameInput.value);
        // console.log("I km da percorrere sono:", kmInput.value);
        // console.log("Il conducente è:", ageSelect.value);

        let summary = prompt("Riepilogo dati inseriti: " + nameInput.value + ", " + kmInput.value + "km" + ", " + ageSelect.value + " Confermare?");
        
        if (summary === null) {
            return;
        }
        
        invisibleContainer.style.display="block"

        //Il nome inserito dall'utente viene visualizzato nel biglietto
        document.getElementById('passenger-name').innerHTML = nameInput.value;

        // Il tipo di biglietto varia a seconda dell'età dell'utente
        if (ageSelect.value == "Minorenne") {
            document.getElementById('passenger-age').innerHTML = "Biglietto Junior";
        }
        else if (ageSelect.value == "Pensionato") {
            document.getElementById('passenger-age').innerHTML = "Biglietto Silver";
        }
        else{
            document.getElementById('passenger-age').innerHTML = "Biglietto Standard";
        }

        // genero numero casuale carrozza
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        
        document.getElementById('cab').innerHTML = getRndInteger(1,10);

        // genero numero casuale codice
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        
        document.getElementById('code').innerHTML = getRndInteger(90000,99999);

        // il prezzo del biglietto varia a seconda dell'età dell'utente

        ticketPrice = 0.21 * kmInput.value;
                
        let youngerPrice;
        let olderPrice;
        
        if (ageSelect.value == "Minorenne") {

            youngerPrice = (ticketPrice - (ticketPrice * 20) / 100);
        
            youngerPrice = youngerPrice.toFixed(2);
        
            document.getElementById("price").innerHTML = youngerPrice + "€" ;
            
        }
        
        else if (ageSelect.value == "Pensionato") {

            olderPrice = (ticketPrice - (ticketPrice * 40) / 100);
        
            olderPrice = olderPrice.toFixed(2);

            document.getElementById("price").innerHTML = olderPrice + "€" ;
        }
        
        else{            
            document.getElementById("price").innerHTML = ticketPrice + "€" ;
        }


        

    }

)

deleteButton.addEventListener('click',
    //quando viene cliccato il pulsante "Annulla" i campi degli input vengono "svuotati"
    function() {
        nameInput.value = "";
        kmInput.value = "";
        ageSelect.value = "";
    }

)






































