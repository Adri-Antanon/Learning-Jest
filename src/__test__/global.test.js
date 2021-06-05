const text = "Hola Mundo";

test('It must contain a text', () => {
  expect(text).toMatch(/Mundo/);
});
