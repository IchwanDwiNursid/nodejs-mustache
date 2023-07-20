import { sum } from "../src/sum";

test('string.not', () => {
    const name = "ichwan dwi nursid";

    expect(name).not.toBe('pandu');
    expect(name).not.toContain('pipit');
    expect(name).not.toEqual('rotul')


    const result = sum(2,3);

    expect(result).not.toBeGreaterThan(7);
    expect(result).not.toBeGreaterThanOrEqual(8);
    expect(result).not.toBeLessThan(3);
    expect(result).not.toBeLessThanOrEqual(2);
})