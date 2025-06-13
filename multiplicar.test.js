const multiplicar = require('./multiplicar.js')
 
test('multiplicar 2 * 5 deve ser 10',() => {
    expect(multiplicar(2,10)).toBe(20);
});
