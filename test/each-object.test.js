import { sumAll } from "../src/sum"

const table = [
    {
        numbers : [10,10,10],
        expected : 30
    },
    {
        numbers : [10,10,10,10],
        expected : 40
    },
    {
        numbers : [10,10,10,10,10],
        expected : 50
    },
    {
        numbers : [10,10,10,10,10,10],
        expected : 60
    }
]

test.each(table)("test sumAll(%s) should result (%i)", ({numbers,expected}) => {
    expect(sumAll(numbers)).toBe(expected);
})