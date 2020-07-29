export const fetchFromStorage = () => {
  const values = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i]).replace(/ 0+(?![\. }])/g, ' ')));
  }
  console.log(values)
  return values;
};
