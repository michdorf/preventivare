import type Ammonta from "../interfacce/ammonta"

export default function format(a: Ammonta) {
    return a.split(':')[0] + ' ' + a.split(':')[1];
}