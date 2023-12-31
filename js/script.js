
const button = document.querySelector('.btn-generate');

button.addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let kilometers = document.getElementById('kilometers').value;
    let age = document.getElementById('age').value;

    let price_start = 0.21 * kilometers;
    let price_final = '';

    if (age == 'Min') {
        // Istruzioni per il calcolo del prezzo scontato del 20%
        let sale = price_start * 20 / 100;
        price_final = price_start - sale;
        ticket_price = price_final.toFixed(2)+'€';
        document.getElementById('utente').innerText = name;
        document.getElementById('prezzo').innerText = ticket_price;
        
    }
    else if (age == 'Max') {
        // Istruzioni per il calcolo del prezzo scontato del 40%
        let sale = price_start * 40 / 100;
        price_final = price_start - sale;
        ticket_price = price_final.toFixed(2)+'€';
        document.getElementById('utente').innerText = name;
        document.getElementById('prezzo').innerText = ticket_price;
    }
    else {
        // Istruzioni per il calcolo del prezzo non scontato
        price_final = price_start;
        ticket_price = price_final.toFixed(2)+'€';
        document.getElementById('utente').innerText = name;
        document.getElementById('prezzo').innerText = ticket_price;
    }
    console.log(ticket_price);
})