
import { NatParInt,
} from "./NatParInt";
/*
import { NatDecimal
} from './NatDecimal';
*/

/*
let x = new NatDecimal("75");
let unD = new NatDecimal("1");
console.log("150 ? " + x.somme(x).toString());
x = new NatDecimal("9999999999999999");
console.log("10000000000000000 ? " + x.somme(unD).toString());
*/

let y = new NatParInt(85);
let un = new NatParInt(1);
console.log("170 ? " + y.somme(y).toString());
y = new NatParInt(9999999999999999);
console.log(y);
console.log(y.somme(un).val() === y.val());
/*
try {
    let z = new NatDecimal("aze");
    console.log(z.toString());
} catch (e) {
    console.log("!!! erreur !!!");
}
*/

/*
type Nat = NatParInt | NatDecimal;
// Calculs sur les types réalisés par le compilateur de Typescript
// Pour examiner le type attribué à n, taper 'n' pour observer son type.
// Voir les commentaires.
let n: Nat = unD; // n : NatDecimal
n = un; // n : NatParInt
n = unD; // n : NatDecimal
let z = 3;
if (z < 4) {
    n = un; // n : NatParInt
} else {
    n = unD; // n : NatDecimal
}
*/
// n : Nat
/*
console.log(n.toStringJSON());
// n.toStringJSON() : FormatNatParInt | FormatNatDecimal
if (n instanceof NatParInt) {
    console.log(n.toStringJSON()); // n : NatParInt
} else {
    console.log(n.toStringJSON()); // n : NatDecimal
}
*/