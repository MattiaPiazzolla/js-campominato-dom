// RECUPERO IL PULSANTE PER INIZIARE/RESETTARE IL GIOCO
const playBtn = document.getElementById('playBtn');
// RECUPERO DIFFICOLTÀ
let difficulty = document.getElementById('difficultyLevel').value;
// DEFINISCO LA FUNZIONE PER LA CREAZIONE DELL'ELEMENTO DELLA GRIGLIA
function createGridElement() {
    // DEFINISCO CHE TIPO DI ELEMENTO CREARE
    let currentElement = document.createElement('div');
    // DEFINISCO LE CONDIZIONI IN BASE ALLA DIFFICOLTÀ 
    if (difficulty === 'easy'){
        // AGGIUNGO UNA CLASSE ALL'ELEMENTO CREATO, PER DEFINIRE IL SUO STILE
        currentElement.classList.add('squareEasy');
        // ESCO DALLA FUNZIONE RESTITUENDO LA VARIABILE currentElement
        return currentElement;
    } else if (difficulty === 'medium'){
        // AGGIUNGO UNA CLASSE ALL'ELEMENTO CREATO, PER DEFINIRE IL SUO STILE
        currentElement.classList.add('squareMedium');
        // ESCO DALLA FUNZIONE RESTITUENDO LA VARIABILE currentElement
        return currentElement;
    } else {
        // AGGIUNGO UNA CLASSE ALL'ELEMENTO CREATO, PER DEFINIRE IL SUO STILE
        currentElement.classList.add('squareHard');
        // ESCO DALLA FUNZIONE RESTITUENDO LA VARIABILE currentElement
        return currentElement
    }
}
// DEFINISCO IL NUMERO TOTALE DELLE BOMBE
const totalBombs = 16;
// DEFINISCO LA FUNZIONE CHE GENERI 16 NUMERI DIVERSI TRA LORO 
    function createBombs(totalBombs , totalElements ){
        // DEFINISCO UN ARRAY VUOTO
        let bombs = [];
        // DEFINISCO UN CICLO WHILE PER FAR GENERARE 16 NUMERI DIVERSI 
        while(bombs.length < totalBombs){
            // GENERO IL NUMERO EFFETTIVO CHE VERRA INSERITO NELL'ARRAY
            let bomb = Math.floor(Math.random() * totalElements) + 1;
            // VERIFICO CHE IL NUMERO NON SIA GIÀ PRESENTE ALL'INTERNO DELL'ARRAY
            if (!bombs.includes(bomb)){
                // PUSH THE NUMBER INSIDE THE ARRAY
                bombs.push(bomb);
            }
        }
        // UNA VOLTA COMPLETATO IL CICLO WHILE, ESCO E RESTITUISCO L'ARRAY
        return bombs;
    }

    // FUNZIONE PER RIVELARE LE BOMBE
    function bombsReveal(bombs) {
        // DICHIARO UNA VARIABILE PER RECUPERARE TUTTE LE FUNZIONI CON UNA DETERMINATA CLASSE 
        const allSquares = document.querySelectorAll('.squareEasy, .squareMedium, .squareHard');
        // CICLO TUTTI I QUADRATI SELEZIONATI
    for (let i = 0; i < allSquares.length; i++) {
        // OTTENGO IL NUMERO DEL QUADRATO ATTUALE
        const cell = allSquares[i];
        // OTTENGO IL NUMERO ALL'INTERNO CEL QUADRATO E LO CONVERTO IN VALORE NUMERALE
        const cellNumber = parseInt(cell.innerText);
        // VERIFICO SE IL NUMEOR È PRESENTE NEL'ARRAY 
        if (bombs.includes(cellNumber)) {
            // AGGIUNGO LA CLASSE
            cell.classList.add('bomb');
        }
    }
}

// DEFINISCO LA DESTINAZIONE DEGLI ELEMENTI CREATI
const gridDestination = document.getElementById('gridContainer');

// DEFINISCO L'EVENTO CLICK DEL PULSANTE playBtn
playBtn.addEventListener('click', function(){
    // SVUOTO LA GRIGLIA PRIMA DI GENERARNE UNA NUOVA
    gridDestination.innerHTML = '';
    // CAMBIO IL NOME DEL PULSANTE
    playBtn.innerText = 'Reset';
    // RESETTO LA CONSOLE
    console.clear();
    // RESETTO IL PUNTEGGIO
    let score = 0; //------------------------------------------------------------------------------------------NON CAPISCO PERCHE FUNZIONA SOLO PARZIALMENTE
    // RESETTO LA CLASSE PER DISABILITARE IL CLICK
    gridDestination.classList.remove('game-over');
    // RIVALUTO IL VALORE DI DIFFICULTI AL CLICK DEL PULSANTE DI AVVIO/RESET
    difficulty = document.getElementById('difficultyLevel').value;
    // INIZIALIZZO GLI ELEMENTI DELLA GRIGLIA 
    let totalElements; 
    // DEFINISCO LE CONDIZIONI DI CREAZIONE DELLA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTÀ
    if (difficulty === 'easy'){
        totalElements = 100; 
    } else if (difficulty === 'medium'){
        totalElements = 81; 
    } else if (difficulty === 'hard') {
        totalElements = 49; 
    }
    // CHIAMO LA FUNZIONE PER GENERARE LE BOMBE
    const bombs = createBombs(totalBombs, totalElements);
    // ESEGUO UN CICLO IN BASE A totalElements PER CREARE LA GRIGLIA
    for(let i = 0; i < totalElements; i++){
        // CREO IL SINGOLO ELEMENTO CHIAMANDO LA FUNZIONE
        let currentSquare = createGridElement();
        // AGGIUNGO IL NUMERO ALL'INTERNO DEGLI ELEMENTI
        currentSquare.innerText = i + 1;
        // AGGIUNGO UN eventListener PER OGNI ELEMENTO DELLA GRIGLIA
        currentSquare.addEventListener('click', function(){
            // VERIFICO CHE L'ELEMENTO NON SIA GIA STATO CLICCATO
            if (this.classList.contains('clicked')) {
                return; // Esce dalla funzione se la cella è già stata cliccata o è una bomba
            }
            // MOSTRO IL NUMERO DELLA CELLA NELLA CONSOLE
            console.log(`Hai cliccato sulla cella numero ${i + 1}`);
            // CONTROLLA SE LA CELLA CLICCATA CONTIENE UNA BOMBA
            if (bombs.includes(i + 1)) {
                // AGGIUNGO LA CLASSE bomb ALLE CELLE CON IL NUMERO PRESENTE NELL'ARRAY bombs
                this.classList.add('bomb');
                // AGGIUNGO LA CLASSE PER DISABILITARE IL CLICK
                gridDestination.classList.add('game-over');
                // CHIAMO LA FUNZIONE PER RIVELARE LE BOMBE
                bombsReveal(bombs);
                // AGGIUNGO UN ALLERT DI SCONFITTA
                alert('BOOM!!! Hai calpestato una BOMBA, hai perso...');
                document.getElementById('scoreOutput').innerHTML = `<h2 class="text-center text-light my-3">BOOM!!! Hai calpestato una BOMBA, hai perso...</h2>`
            } else {
                // AGGIUNGO UNA CLASSE clicked
                this.classList.add('clicked');
                // AUMENTIAMO LO SORE
                score ++;
                // DEFINISCO L'OUTPUT DEL PUNTEGGIO
                document.getElementById('scoreOutput').innerHTML = `<h2 class="text-center text-light my-3">Punteggio : ${score}</h2>`
            }
        });
        // APPENDO L'ELEMENTO CREATO ALL'INTERNO DI gridDestination
        gridDestination.append(currentSquare);
    }

});
