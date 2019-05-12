const memorizeCreator = require('./02-memorize');


describe('Memorize', () => {
  var memorize;

  beforeAll(() => {
    memorize =  memorizeCreator();
  });

  it('memorizeCreator should be defined', () => {
    expect(memorizeCreator).toBeDefined();
  });

  it('memorizeCreator should be a function', () => {
    expect(typeof memorizeCreator).toBe('function');
  });

  it('memorizeCreator should return a function', () => {
    expect(typeof memorizeCreator()).toBe('function');
  });

  it('memorize after first execution should return [1]', () => {
    expect(memorize(1)).toEqual(expect.arrayContaining([1]));
  });

  it('memorize after second execution should return [1, 2]', () => {
    expect(memorize(2)).toEqual(expect.arrayContaining([1, 2]));
  });

  it('memorize after third execution should return [1, 2, null]', () => {
    expect(memorize(null)).toEqual(expect.arrayContaining([1, 2, null]));
  });
});
