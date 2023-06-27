export default function createIteratorObject(report) {
  let list = [];

  for (const item in report.allEmployees) {
    if (item.length) {
      // Statement is wrapped in this if block as a temporary workaround for eslint
      list = [...list, ...report.allEmployees[item]];
    }
  }
  return list;
}
