test('array', () => {
    const names = ['ichwan','dwi','nursid'];
    expect(names).toContain('dwi');
    expect(names).toEqual(['ichwan','dwi','nursid']);

    const person = [
        {name : 'ichwan'},
        {name : 'nursid'}
    ];

    expect(person).toContainEqual({name:'nursid'});
    expect(person).toEqual(
        [
            {name : 'ichwan'},
            {name : 'nursid'}
        ]
    )
})