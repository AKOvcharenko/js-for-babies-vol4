const getSingletonCreator = require('./04-singleton');

describe('Singleton', ()=> {
  const creator = getSingletonCreator();

  it('getSingletonCreator should be defined', ()=> {
    expect(getSingletonCreator).toBeDefined();
  });

  it('getSingletonCreator should be a function', ()=> {
    expect(typeof getSingletonCreator).toBe('function');
  });

  it('getSingletonCreator should return a function', ()=> {
    expect(typeof creator).toBe('function');
  });

  it('should be singleton', () => {
    expect(creator()).toBe(creator());
  });
});

