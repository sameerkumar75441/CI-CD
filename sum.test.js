import sum from "./sum.js"

describe('test for sum fnx', () => {
    test("adds 2+2 equal to 4",()=>{
    expect(sum(2,2)).toBe(4);
});

test("adds -5,-4 equal to -9",()=>{
    expect(sum(-5,-9)).toBe(-9);
});
});
