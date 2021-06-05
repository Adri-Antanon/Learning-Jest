const text = "Hola Mundo";
const fruits = ["Manzana", "Melón", "Banana"];

test('It must contain a text', () => {
  expect(text).toMatch(/Mundo/);
});

test('Is there a banana?', () => {
  expect(fruits).toContain('Banana');
});

test('Greater than', () => {
  expect(10).toBeGreaterThan(9);
});

test('Is true?', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""));
};

test('Callback test', () => {
  reverseString("Hola", (str) => {
    expect(str).toBe('aloH');
  });
});
