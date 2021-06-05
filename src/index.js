const cities = ['Barcelona', 'Madrid', 'Badalona', 'Santa Coloma'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};


const reverseStringPromise = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('No hay string'));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;