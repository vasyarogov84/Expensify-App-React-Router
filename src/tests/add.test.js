const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`

test("should add 2 numbers", () => {
    const sum = add(3, 4);
    expect(sum).toBe(7);
});

test("should return greeting", () => {
    const greeting = generateGreeting('Viktor');
    expect(greeting).toBe(`Hello Viktor!`);
});