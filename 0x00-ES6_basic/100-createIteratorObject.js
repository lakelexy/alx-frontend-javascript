export default function createIteratorObject(report) {
  const myarray = [];
  for (const department of Object.values(report.allEmployees)) {
    myarray.push(...department);
  }
      
  return myarray;
}
