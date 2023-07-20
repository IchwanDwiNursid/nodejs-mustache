import { sum } from "../src/sum"

test('number matcher', () => {
    const value = sum (2,3);

    expect(value).toBeGreaterThan(2);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(6);
    expect(value).toBeLessThanOrEqual(5);
})