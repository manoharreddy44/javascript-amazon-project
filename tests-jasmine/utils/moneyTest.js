import { formatCurrencypriceCents } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrencypriceCents(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrencypriceCents(0)).toEqual('0.00');
  });

  it('round to the nearest cent', () => {
    expect(formatCurrencypriceCents(2000.5)).toEqual('20.01');
  });
});