//Q: to flatten the JSON array
const data = [0, 1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]];
function flattenJson(data, d) {
  return d > 0
    ? data.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flattenJson(val, d - 1) : val),
        []
      )
    : data.slice(0);
}
console.log(flattenJson(data, 2));
