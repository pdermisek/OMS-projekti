$(document).foundation() // Ova linija koda inicijalizira Foundation framework




// OVE TRI LINIJE KODA SELEKTIRAJU HTML ELEMENTE KORISTEĆI NJIHOVE KLASE (CLASS)
const clickArea = document.querySelector(".click-area");
const prviTekst = document.querySelector(".prvi-tekst");
const rezultatElements = document.querySelectorAll(".rezultat");





// VARIJABLE LET I CONST SLUŽE ZA PRAĆENJE REZULTATA IGRE I VREMENA POTREBNOG ZA PROMJENU BOJE U ZELENO
const zadnjiRezultati = [];

const MINIMUM_MS_DO_PROMJENE = 2000;
const MAXIMUM_MS_DO_PROMJENE = 6000;

let kolkoMilisekundi = 0;
let cekamNaKlik = false; 





/* FUNKCIJA IGRAJ POSTAVLJA BOJU NA NULL A ZATIM GENERIRA SLUČAJNO VRIJEME I POSTAVLJA BOJU NA ZELENO NAKON TOG VREMENA.
TAKOĐER POSTAVLJA I VARIJABLE ZA PRAĆENJE VREMENA I ČEKA NA KORISNIKOV KLIK */
function igraj() {
    const msDoPromjene = Math.floor(Math.random() * (MAXIMUM_MS_DO_PROMJENE - MINIMUM_MS_DO_PROMJENE)) + MINIMUM_MS_DO_PROMJENE;
    // GENERIRA RANDOM BROJ IZMEĐU 2000 I 6000

    // VRAĆA BOJU NAZAD U CRVENO 
    clickArea.style.backgroundColor = null;

    prviTekst.textContent = "";

    setTimeout(() => {
        kolkoMilisekundi = Date.now();
        clickArea.style.backgroundColor = "#00ff00" ;
        cekamNaKlik = true; 
    }, msDoPromjene);

}





// Ova funkcija dodaje rezultat u listu rezultata i ažurira HTML prikaz pet najnovijih rezultata.
function dodajRezultat(rezultat) {
    zadnjiRezultati.unshift(rezultat);

    for (let i = 0; i < Math.min(zadnjiRezultati.length, 5); i++) {
        const rezultat = zadnjiRezultati[i];

        rezultatElements[i].textContent = `${rezultat} ms`;
        
    }
}





/* Event listener reagira na klik na područje. Ako je igrač kliknuo tijekom zelenog razdoblja, 
izračunava vrijeme reakcije i ažurira prikaz. Ako nije kliknuto tijekom zelenog razdoblja, poziva funkciju igraj() 
za pokretanje nove igre. */
clickArea.addEventListener("click", () => {
    if (cekamNaKlik) {
        const rezultat = Date.now() - kolkoMilisekundi;

        cekamNaKlik = false;
        prviTekst.textContent = `Vaše vrijeme je ${rezultat} ms! Kliknite ako želite opet igrati. `;

        dodajRezultat(rezultat);

    } else {
        igraj();
    }
});