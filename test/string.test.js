test('string', () => {
    const name = 'ichwan dwi nursid';

    expect(name).toBe('ichwan dwi nursid');
    expect(name).toEqual('ichwan dwi nursid');
    expect(name).toMatch(/sid/);
})