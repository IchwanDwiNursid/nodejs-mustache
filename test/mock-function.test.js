import { calculate, calculateAndReturn } from "../src/sum"

test('mock function', () => {
    const callback = jest.fn();


    calculate([10,10,10],callback);
    calculate([10,10,10,10,10],callback);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);


    console.log(callback.mock.calls)
});

test('test funtion mock return value', () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(50);
    callback.mockReturnValueOnce(80);


    expect(calculateAndReturn([10,10,10],callback)).toBe(50);
    expect(calculateAndReturn([10,10,10,10,10],callback)).toBe(80);

    expect(callback.mock.results[0].value).toBe(50);
    expect(callback.mock.results[1].value).toBe(80);
});

test.only('mock implementation', () => {
    const callback = jest.fn();

    callback.mockImplementationOnce((total) => {
        return total*2
    });

    callback.mockImplementationOnce((total) => {
        return total-10
    });

    expect(calculateAndReturn([10,10,10],callback)).toBe(60);
    expect(calculateAndReturn([10,10,10,10,10],callback)).toBe(40);

    expect(callback.mock.results[0].value).toBe(60);
    expect(callback.mock.results[1].value).toBe(40);

})