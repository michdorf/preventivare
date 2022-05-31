import * as stellaDB from '../../moduli/moduli/stellaDB.js'
import * as indexedDB from '../../moduli/moduli/indexedDB.js'
import * as Memo from '../../moduli/memo/memo.js'
import * as MemoSinc from '../../moduli/memo/memo.sinc.js'

const memodb = new Memo('preventivare', 
                        ['categorie', 'spese', 'regali'], 
                        [["id", "creato"], ["id", "categoria", "data", "creato"], ["id", "data", "creato"]]);

memodb.suPronto(() => alert('memodb pronto'));

export default {memodb}