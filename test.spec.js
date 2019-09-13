const someFunc = (arg) => {
  if (arg === 'hello') throw new Error('Oops! Something went wrong!');
  console.log(arg);
};

describe('test', () => {
  it('test', () => {
    const fn = (arg) => () => { someFunc(arg) };
    expect(fn('hello')).toThrow();
  });
});
