export type Valuta = 'dkk' | 'eur';

type Ammonta = `${number}:${Valuta}`;

export function format(a: Ammonta) {
    return a.split(':')[0] + ' ' + (a.split(':')[1] || `${a} wasn't parsed correctly`);
}

export function toAmmonta(ammonta: number, valuta: Valuta): Ammonta {
    return `${ammonta}:${valuta}`;
}

export default Ammonta;