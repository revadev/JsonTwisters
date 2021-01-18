//Q: find employee depth and who reports to who relation
const data = {
  companyname: "IBM",
  employees: {
    name: "Ananya",
    Reportees: [
      {
        name: "sagar",
        Reportees: [
          { name: "Tripti", Reportees: [] },
          { name: "Kaveri", Reportees: [{ name: "Palak", Reportees: [] }] },
        ],
      },
      { name: "Rachna", Reportees: [] },
      {
        name: "Gagan",
        Reportees: [
          { name: "Puneet", Reportees: [] },
          { name: "Radha", Reportees: [] },
        ],
      },
      { name: "Tanya", Reportees: [] },
    ],
  },
};
let memo = {};

function findDepth(data, name, d = 1) {
  if (!memo[name]) {
    memo[data.name] = d;
    for (let a of data.Reportees) {
    console.log(a.name+" reports to "+data.name);
      findDepth(a, name, d + 1)
    }
  }
  return memo[name];
}
console.log(findDepth(data.employees, "Puneet"));
console.log(findDepth(data.employees, "Tripti"));