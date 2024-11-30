import Employee from "./Employee";
function App(props) {
  let data1 = props.employees.filter(
    (employee) =>
      employee.name[0] === "A" ||
      employee.name[0] === "E" ||
      employee.name[0] === "I" ||
      employee.name[0] === "O" ||
      employee.name[0] === "U"
  );
  let data = props.employees.filter((employee) => employee.salary > 20000);

  return (
    <div>
      <h1>Employees List</h1>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Father name</th>
          <th>Age</th>
          <th>Salary </th>
          <th>Mobile NO</th>
        </tr>
        <tbody>
          {data.map((employee, index) => (
            <Employee employee={employee}></Employee>
          ))}
        </tbody>
        <h1>Employee with start name character is vowel</h1>
        <tbody>
          {data1.map((employee, index) => (
            <Employee employee={employee}></Employee>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
