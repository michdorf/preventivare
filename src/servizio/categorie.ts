import Salvabile, { type SalvabileServizio } from '../../moduli/moduli/salvabile'
import uuid from '../../moduli/memo/uuid'
import type Categoria from '../interfacce/categoria'

class Categorie extends Salvabile implements SalvabileServizio {
    constructor() {
        super('preventivare', 'categorie');
    }

    agg() {
        const c: Categoria = {
            id: uuid(),
            titolo: 'Test',
            parente: null,
            stima: '22:eur',
            creato: new Date()
        };
        super.agg(c);
    }
}

export default new Categorie();