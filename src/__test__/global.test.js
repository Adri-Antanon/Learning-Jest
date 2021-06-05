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

const reverseStringPromise = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('No hay string'));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test('Promise test', () => {
  return reverseStringPromise('Hola')
    .then(str => {
      expect(str).toBe('aloH');
    });
});

test('Async Test', async () => {
  const string = await reverseStringPromise('Hola');
  expect(string).toBe('aloH');
});

afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all tests'));
beforeEach(() => console.log('After each test'));
beforeAll(() => console.log('After all tests'));
