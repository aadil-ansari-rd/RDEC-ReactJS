function App(props) {
  let sum =0;
  let largest = props.data[0];
  for(let i =0;i<props.data.length; i++){
    sum = sum + props.data[i];
  }
  for(let j =1;j<props.data.length; j++){
    if(props.data[j]>largest){
      largest = props.data[j]
    }
  }
  let a1 = props.data[0].salary;
  let sumSal = 0;
  props.data.forEach((em)=>{
    sumSal = sumSal + em.salary;
  })
  let avg = sumSal/props.data.length;
  let sum1=0
  for(let j =0;j<props.data.length; j++){
    sum1=sum1 + props.data[j].salary;
  }
  return (
    <div>
      <h1>We are in props   </h1>
      {/* <h1>{ props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.age}</h1>
      <h1>{props.course}</h1> */}

      {/* <h1>principle = {props.p}</h1>
      <h1>rate ={props.r}</h1>
      <h1>time = {props.t}</h1>
      <h1>si = {props.p* props.r*props.t/100}</h1> */}

      {/* <h1>{props.user.name}</h1>
      <h1>{props.user.age}</h1>
      <h1>{props.user.salary}</h1> */}

      {/* <div>{props.array.map((element , i)=> 
        <h1 key={i}>{element}</h1>
      )}</div> */}
      <h1>{a1}</h1>
      <h1>Avg Salary = {avg}</h1>
      <h1>{sum1}</h1>
      <h1>{sumSal}</h1>

      
    </div>
  );
}

export default App;
