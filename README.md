# Campo minato

- Prendo gli elemento dal DOM:
    - target della griglia
    - bottone per far comparire  la griglia
- stabilisco quante rows e cols ha la griglia
- calcolo in numero massimo di celle
- Creo la singola cella
- **FINO A CHE** non ho raggiunto il numero massimo di celle:
    - inserisco una cella nella riglia
    - gli metto un numero di riferimento
    - aumento il numero di riferimento di 1
    - metto in ascolto la cella al click:
        - una volta cliccato lo sfondo della cella diventa azzurro