import type Ammonta from "../ts/ammonta";
import type Categoria from "./categoria";
import type Ricorrente from '../../moduli/moduli/ricorrente';

export default interface Spesa {
    id: string;
    titolo: string;
    categoria: Categoria;
    etichette: string[];
    commento: string;
    ammonta: Ammonta;
    pagato: boolean;
    data: Date; /** Data che devi usare i soldi */
    ripeti?: Ricorrente;
    creato: Date;
}