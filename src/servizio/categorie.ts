import Salvabile, { type SalvabileServizio } from '../../moduli/moduli/salvabile'
import uuid from '../../moduli/memo/uuid'
import type Categoria from '../interfacce/categoria'

class Categorie extends Salvabile implements SalvabileServizio {
    constructor() {
        super('preventivare', 'categorie');
    }

    agg(c: Categoria) {
        super.agg(c);
    }
}

export default new Categorie();