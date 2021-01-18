//Q: to find the depth of element
const data = [0, 1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]];

function findDepth(data, ele, d = 0) {
  if (data.indexOf(ele) === -1) {
    for (let a of data) {
      if (Array.isArray(a)) {
       return findDepth(a, ele, d + 1);
      }
    }
  } else return d;
}

console.log(findDepth(data, 10));