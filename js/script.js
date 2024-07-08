// RECUPERO IL PULSANTE PER INIZIARE/RESETTARE IL GIOCO
const playBtn = document.getElementById('playBtn');
// RECUPERO DIFFICOLTÀ
let difficulty = document.getElementById('difficultyLevel').value;
// DEFINISCO LA FUNZIONE PER LA CREAZIONE DELL'ELEMENTO DELLA GRIGLIA
function createGridElement() {
    // DEFINISCO CHE TIPO DI ELEMENTO CREARE
    let currentElement = document.createElement('div');
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
    } else if (difficulty === 'hard') {
        // AGGIUNGO UNA CLASSE ALL'ELEMENTO CREATO, PER DEFINIRE IL SUO STILE
        currentElement.classList.add('squareHard');
        // ESCO DALLA FUNZIONE RESTITUENDO LA VARIABILE currentElement
        return currentElement;
    } else {
        return currentElement
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
    // RIVALUTO IL VALORE DI DIFFICULTI AL CLICK DEL PULSANTE DI AVVIO/RESET
    difficulty = document.getElementById('difficultyLevel').value;
    // DEFINISCO LE CONDIZIONI DI CREAZIONE DELLA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTÀ
    if (difficulty === 'easy'){
        // ESEGUO UN CICLO DI 100 ITERAZIONI PER CREARE UNA GRIGLIA
        for(let i = 0; i < 100; i++){
            // CREO IL SINGOLO ELEMENTO CHIAMANDO LA FUNZIONE
            let currentSquare = createGridElement();
            // AGGIUNGO UN eventListener PER OGNI ELEMENTO DELLA GRIGLIA
            currentSquare.addEventListener('click', function(){
                // AGGIUNGO UNA CLASSE CON LA FUNZIONE TOGGLE PER ACCENDERE E SPEGNERE AD OGNI CLICK
                this.classList.add('clicked');
                // MOSTRO IL NUMERO DELLA CELLA NELLA CONSOLE
                console.log(`Hai cliccato sulla cella numero ${i + 1}`);
            });
            // AGGIUNGO IL NUMERO ALL'INTERNO DEGLI ELEMENTI
            currentSquare.innerText = i + 1;
            // APPENDO L'ELEMENTO CREATO ALL'INTERNO DI gridDestination
            gridDestination.append(currentSquare);
        }
    } else if (difficulty === 'medium'){
        // ESEGUO UN CICLO DI 81 ITERAZIONI PER CREARE UNA GRIGLIA
        for(let i = 0; i < 81; i++){
            // CREO IL SINGOLO ELEMENTO CHIAMANDO LA FUNZIONE
            let currentSquare = createGridElement();
            // AGGIUNGO UN eventListener PER OGNI ELEMENTO DELLA GRIGLIA
            currentSquare.addEventListener('click', function(){
                // AGGIUNGO UNA CLASSE CON LA FUNZIONE TOGGLE PER ACCENDERE E SPEGNERE AD OGNI CLICK
                this.classList.add('clicked');
                // MOSTRO IL NUMERO DELLA CELLA NELLA CONSOLE
                console.log(`Hai cliccato sulla cella numero ${i + 1}`);
            });
            // AGGIUNGO IL NUMERO ALL'INTERNO DEGLI ELEMENTI
            currentSquare.innerText = i + 1;
            // APPENDO L'ELEMENTO CREATO ALL'INTERNO DI gridDestination
            gridDestination.append(currentSquare);
        }
    } else if (difficulty === 'hard') {
        // ESEGUO UN CICLO DI 49 ITERAZIONI PER CREARE UNA GRIGLIA
        for(let i = 0; i < 49; i++){
            // CREO IL SINGOLO ELEMENTO CHIAMANDO LA FUNZIONE
            let currentSquare = createGridElement();
            // AGGIUNGO UN eventListener PER OGNI ELEMENTO DELLA GRIGLIA
            currentSquare.addEventListener('click', function(){
                // AGGIUNGO UNA CLASSE CON LA FUNZIONE TOGGLE PER ACCENDERE E SPEGNERE AD OGNI CLICK
                this.classList.add('clicked');
                // MOSTRO IL NUMERO DELLA CELLA NELLA CONSOLE
                console.log(`Hai cliccato sulla cella numero ${i + 1}`);
            });
            // AGGIUNGO IL NUMERO ALL'INTERNO DEGLI ELEMENTI
            currentSquare.innerText = i + 1;
            // APPENDO L'ELEMENTO CREATO ALL'INTERNO DI gridDestination
            gridDestination.append(currentSquare);
        }
    }
});
