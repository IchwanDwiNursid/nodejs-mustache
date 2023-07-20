test('test equal matchers',() => {
    const name = 'ichwan';
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello ichwan')
})