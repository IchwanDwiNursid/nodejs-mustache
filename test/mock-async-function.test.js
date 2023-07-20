import { getBalance } from "../src/async";

test("mock async function",async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000);
    from.mockResolvedValueOnce(3000);

    await expect(getBalance('ichwan', from)).resolves.toEqual({
        name : 'ichwan',
        balance : 1000
    }); 

    await expect(getBalance('toni', from)).resolves.toEqual({
        name : 'toni',
        balance : 3000
    }); 

    expect(from.mock.calls.length).toBe(2);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
    await expect(from.mock.results[1].value).resolves.toBe(3000);
});

test.failing('mock async function rejected', async() => {
    const from = jest.fn().mockRejectedValueOnce("rejected");

    await getBalance('ichwan', from)

})