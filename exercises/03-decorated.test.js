const greeter = require('./03-decorated');

describe('Decorator', () => {
  it('greeter should be defined',() => {
    expect(greeter).toBeDefined();
  });

  it('greeter should be function',() => {
    expect(typeof greeter).toBe('function');
  });

  it('greeter should return proper greet for Jarek',() => {
    expect(greeter('Jarek Mazur')).toBe('hello there, Jarek Mazur');
  });

  it('greeter should return proper greet for Artem',() => {
    expect(greeter('Artem Ovcharenko')).toBe('gtfo');
  });
});
