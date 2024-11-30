function Employee(props) {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.fatherName}</td>
      <td>{props.employee.age}</td>
      <td>{props.employee.salary}</td>
      <td>{props.employee.mobNo}</td>
    </tr>
  );
}

export default Employee;
