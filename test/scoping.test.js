beforeEach(()=> {
    console.info('before each')
});

afterEach(()=> {
    console.info('after each')
});

beforeAll(()=> {
    console.info('before All')
});

afterAll(()=> {
    console.info('after All')
})

test('Outer test',() => {
    console.log('first test')
})

describe('Inner', () => {

    beforeEach(() => {
        console.info('Before Each inner')
    });
    afterEach(() => {
        console.info('After Each inner')
    });
    beforeAll(() => {
        console.info('Before All inner')
    });
    afterAll(() => {
        console.info('After All inner')
    });

    test('Inner test', () => console.info('Inner Test'));
})
