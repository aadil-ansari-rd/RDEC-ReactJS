function Student(props) {
  return (
    <div>
      <h2>Name : {props.student.name}</h2>
      <h2>Age : {props.student.age}</h2>
      <h2>Marks : {props.student.marks}</h2>
      <hr />
    </div>
  );
}

export default Student;
