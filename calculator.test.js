let { add, subtract, multiply, divide, delayedAddition } = require("calculator")

test("add should return 4 with inputs 1 and 3", () => {
    expect(add(1, 3)).toBe(4)
})

test("subtract should return 5 with inputs 9 and 4", () => {
    expect(subtract(9, 4)).toBe(5)
})

test("should return 6 with inputs 2 and 3", () => {
    expect(multiply(2, 3)).toBe(6)
})

test("should return 2 with inputs 6 and 2", () => {
    expect(divide(6, 3)).toBe(2)
})

test("should throw when dividing by zero", () => {
    expect(() => divide(2, 0)).toThrow()
})

test("delayed addition returns 5 with inputs 2 and 3", async () => {
    const result = await delayedAddition(2, 3)
    expect(result).toBe(5)
})

test("mocked add returns 42", () => {
    add = jest.fn().mockImplementation(() => 42)
    expect(add(3, 4)).toBe(42)
})

test("console.log is called two times in subtract", () => {
    const consoleSpy = jest.spyOn(console, "log")
    subtract(4, 2)
    expect(consoleSpy).toHaveBeenCalledTimes(2)
})

test("console.log is called with 'JENSEN' last", () => {
    const consoleSpy = jest.spyOn(console, "log")
    subtract(4, 2)
    expect(consoleSpy).toHaveBeenLastCalledWith("JENSEN")
})