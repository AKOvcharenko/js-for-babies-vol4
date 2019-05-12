const bind = require('./01-bind');

const marek = {
  name: 'marek',
};

const jarek = {
  name: 'jarek',
};

function fancyFunc() {
  return this.name;
}

const bindedMarek = bind(fancyFunc, marek);

describe('Bind', () => {
  it('should be defined', () => {
    expect(bind).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof bind).toBe('function');
  });

  it('should return an function', () => {
    expect(typeof bind()).toBe('function');
  });

  it('bindedJarek should returns jarek', () => {
    const bindedJarek = bind(fancyFunc, jarek);
    expect(bindedJarek()).toBe('jarek');
  });

  it('bindedMarek should returns marek', () => {
    const bindedMarek = bind(fancyFunc, marek);
    expect(bindedMarek()).toBe('marek');
  });

});
