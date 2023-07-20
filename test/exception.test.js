import { MyException, callMe } from "../src/exception"

test('test async function', () => {
    expect(()=> callMe("ichwan")).toThrow();
    expect(()=> callMe("ichwan")).toThrow(MyException);
    expect(()=> callMe("ichwan")).toThrow("Ups my exception happens");
});

test('exceptions not happen', () => {
    expect(callMe('tono')).toBe('OK');
})

