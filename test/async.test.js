import { sayHelloAsync } from "../src/async"

test('test async function',async () => {
    const name = await sayHelloAsync('ichwan');
    expect(name).toBe('Hello ichwan');
});

test('test async matchers',async() => {
   await expect(sayHelloAsync("ichwan")).resolves.toBe('Hello ichwan');
   await expect(sayHelloAsync()).rejects.toBe('Name Is Empty');
});