// RECUPERO IL PULSANTE PER INIZIARE/RESETTARE IL GIOCO
const playBtn = document.getElementById('playBtn');
// RECUPERO DIFFICOLTÀ
let difficulty = 'easy';
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
    // RIVALUTO IL VALORE DI DIFFICULTI AL CLICK DEL PULSANTE DI AVVIO/RESET
    difficulty = document.getElementById('difficultyLevel').value;
    // INIZZIALIZZO IL PUNTEGGIO
    let score = 0;
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
    // ESEGUO UN CICLO IN BASE A totalElements PER CREARE LA GRIGLIA
    for(let i = 0; i < totalElements; i++){
        // CREO IL SINGOLO ELEMENTO CHIAMANDO LA FUNZIONE
        let currentSquare = createGridElement();
        // AGGIUNGO UN eventListener PER OGNI ELEMENTO DELLA GRIGLIA
        currentSquare.addEventListener('click', function(){
            // MOSTRO IL NUMERO DELLA CELLA NELLA CONSOLE
            console.log(`Hai cliccato sulla cella numero ${i + 1}`);
            // AGGIUNGO UNA CLASSE CON LA FUNZIONE TOGGLE PER ACCENDERE E SPEGNERE AD OGNI CLICK
            this.classList.add('clicked');
            // CONTROLLA SE LA CELLA CLICCATA CONTIENE UNA BOMBA
            if (bombs.includes(i + 1)) {
                // AGGIUNGO LA CLASSE bomb ALLE CELLE CON IL NUMERO PRESENTE NELL'ARRAY bombs
                this.classList.add('bomb');
            }
        });
        // AGGIUNGO IL NUMERO ALL'INTERNO DEGLI ELEMENTI
        currentSquare.innerText = i + 1;
        // APPENDO L'ELEMENTO CREATO ALL'INTERNO DI gridDestination
        gridDestination.append(currentSquare);
    }
});
