import PropTypes from "prop-types";
function User(props){



    return(
        <div>
            <h1>Going to start validation</h1>
            <h1>Name : {props.name}</h1>
            <h1>Email : {props.email}</h1>
            <h1>Age : {props.age}</h1>
        </div>
        
    )

}
User.propTypes ={
    name : PropTypes.string,
    email : PropTypes.string,
    age : PropTypes.number
    //isRequired ek or validation ka trika hai
}
User.defaultProps = {
    name : "Welcome User"
}
export default User;