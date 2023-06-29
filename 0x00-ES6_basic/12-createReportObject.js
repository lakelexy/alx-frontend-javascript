export default function createReportObject(employeesList) {
  function myFunc(anObject) {
    return Object.keys(anObject).length;
  }

  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments: myFunc,
  };

  return report;
}
