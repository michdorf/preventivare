import type Ammonta from "./ammonta";

type CategoriaId_T = string;

export default interface Categoria {
    id: CategoriaId_T;
    titolo: string;
    parente: null | CategoriaId_T;
    stima: Ammonta; 
    creato: number;
}