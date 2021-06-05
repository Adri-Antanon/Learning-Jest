const randomStrings = require('../index');


describe('Testing randomStrings funcionality', () => {
  test('Testing funcionality', () => {
    expect(typeof (randomStrings())).toBe('string');
  });
  test('Testing if exist city', () => {
    expect(randomStrings()).not.toMatch(/Bilbao/);
  });

});
