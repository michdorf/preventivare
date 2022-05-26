import type { Writable } from "svelte/store";
import Salvabile, { SalvabileServizio } from "../../moduli/moduli/salvabile";
import type Spesa from "../interfacce/spesa";

class Spese extends Salvabile implements SalvabileServizio {
    get data(): Writable<Spesa[]> {
        return super.data as Writable<Spesa[]>;
    }

    constructor() {
        super('preventivare', 'spese');
    }

    agg(s: Spesa) {
        console.info(`Aggiungo spesa:`, s);
        super.agg(s);
    }
}

export default new Spese()