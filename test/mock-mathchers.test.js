import { calculate } from "../src/sum";

test('test calculate', () => {
    const callback = jest.fn();


    calculate([10,10,10,10], callback);
    calculate([10,10,10,10,10,10], callback);


    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(40,'ichwan');
    expect(callback).toHaveBeenCalledWith(60,'ichwan');
})