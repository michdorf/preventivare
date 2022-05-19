import type Ammonta from "./ammonta";

interface Persone {
    id: string;
    nome: string;
    immagine: string;
    creato: Date;
}

export default interface Regalo {
    id: string;
    persone: Persone;
    titolo: string;
    prezzo: Ammonta;
    data: Date;
    creato: Date;
}