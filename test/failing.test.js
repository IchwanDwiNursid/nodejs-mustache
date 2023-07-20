import { sayHello } from "../src/sayHello"

test('sayHello success', () => {
    expect(sayHello('ichwan')).toBe('Hello ichwan') 
})

test.failing('sayHello error', () => {
    expect(sayHello(null)).toBe('Name is required') 
})

test('sayHello error', () => {
    expect(() => sayHello(null)).toThrow('Name is required') 
})