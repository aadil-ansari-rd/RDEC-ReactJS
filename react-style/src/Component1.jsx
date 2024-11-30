import "./Component.css";
function Component1(props) {
  let style = props.show ? "para1" : "para2"
  return (
    <div>
      <p className={style}>We have this style by css file not inline</p>
    </div>
  );
}
export default Component1;
