import type Ammonta from "../ts/ammonta";

type CategoriaId_T = string;

export default interface Categoria {
    id: CategoriaId_T;
    titolo: string;
    parente: null | CategoriaId_T;
    stima: Ammonta; 
    creato: number;
}