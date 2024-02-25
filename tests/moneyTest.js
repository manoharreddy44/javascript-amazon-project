import { formatCurrencypriceCents } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency');

console.log('convert cents into dollars');

if (formatCurrencypriceCents(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('Works with 0');

if (formatCurrencypriceCents(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cents');

if (formatCurrencypriceCents(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}