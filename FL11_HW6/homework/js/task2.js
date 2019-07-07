const aStr = prompt('Enter A length');
const bStr = prompt('Enter B length');
const cStr = prompt('Enter C length');

const a = parseFloat(aStr);
const b = parseFloat(bStr);
const c = parseFloat(cStr);

const isNotNumbers = Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c);
const isEquivalent = a === b && a === c && b === c;
const isIsosceles = a === b && b !== c || b === c && a !== c || c === a && a !== b;
const isNormal = a + b > c || a + c > b || b + c > a;

if (isNotNumbers || a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn’t exist');
} else if (isEquivalent) {
    console.log('Eequivalent triangle');
} else if (isIsosceles) {
    console.log('Isosceles triangle');
} else if (isNormal) {
    console.log('Normal triangle');
} else {
    console.log('Triangle doesn’t exist');
}
