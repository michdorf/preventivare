import Salvabile, { type SalvabileServizio } from '../../moduli/moduli/salvabile'
import type Categoria from '../interfacce/categoria'
import type { Writable } from 'svelte/store';

class Categorie extends Salvabile implements SalvabileServizio {
    get data(): Writable<Categoria[]> {
        return super.data as Writable<Categoria[]>;       
    }
    
    constructor() {
        super('preventivare', 'categorie');
    }

    agg(c: Categoria) {
        super.agg(c);
    }
}

export default new Categorie();