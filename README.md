Esercizio di oggi: *Campo Minato*
nome repo: *js-campominato-dom*
*Consegna*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*BONUS:*
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
SUPERBONUS: (da fare solo se si è fatto il bonus principale della difficoltà)
Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*Consigli del giorno:* :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

SCOMPOSIZIONE IN SOTTOPROBLEMI
>Definisco una funzione per generare un'array con 16 numeri diversi tra loro
    >>Definisco un'array vuota 
    >>Utilizzando while stabilisco che un numero deve essere generato generato fino a quando la lunghezza dell'arrai non sia uguale a 16
        >>>Utilizzando math floor e math random genero un numero che va da 1 al numero di elmenti creati in base alla difficoltà (100/81.49)
            >>>>con una condizione if, dico alla funzione di pushare il numero generato solo se non ancora presente all'interno dell'array
        >>>esco dalla funzione 
>all'interno dell'event listener del pulsante play vado ad inizzializzare la variabile per il punteggio 
>definisco il numero totale delle caselle
>Chiamo la funzione per generare le bombe
>all'inten dell'eventi listener della cella, vado ad aggiungere una verifia di presenza del numero della cella cliccata all'interno dell'array 
    >>se il numero è presente, vado ad aggiungere la classe bomb alla cella ed un messaggio di allert di Game over!
    >>In caso contrario, aggiungo la classe clicked e aumento lo score 
        >>> determino le condizioni di vittoria quando il numero del punteggio è uguale al numero delle caselle totali meno il numero delle bombe (16)
>il resto utilizzo la logica utilizzata nell'esercizio precedente a questo
