import Student from "./Student";

function App(props) {
  return (
    <div>
      <h1>Students List Method 1</h1>
      {props.students.map((student, index) => (
        <div key={index}>
          <h2>
            Name : {student.name} , Age : {student.age} , Marks :{student.marks}
          </h2>
        </div>
      ))}
      <hr />
      <hr />
      <h1>Student List Method 2</h1>
      {props.students.map((student, index) => (
        <div key={index}>
          <Student student={student} />
        </div>
      ))}
    </div>
  );
}

export default App;
