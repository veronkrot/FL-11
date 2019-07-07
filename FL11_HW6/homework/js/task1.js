const a1Str = prompt('Enter A1');
const a2Str = prompt('Enter A2');

const b1Str = prompt('Enter B1');
const b2Str = prompt('Enter B2');

const c1Str = prompt('Enter C1');
const c2Str = prompt('Enter C2');

const a1 = parseFloat(a1Str);
const a2 = parseFloat(a2Str);

const b1 = parseFloat(b1Str);
const b2 = parseFloat(b2Str);

const c1 = parseFloat(c1Str);
const c2 = parseFloat(c2Str);

const divider = 2;

const expectedC1 = (a1 + b1) / divider;
const expectedC2 = (a2 + b2) / divider;

if (expectedC1 === c1 && expectedC2 === c2) {
    console.log(true);
} else {
    console.log(false);
}
