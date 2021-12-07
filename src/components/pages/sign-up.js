import classes from "../../styles/signup.module.css"
import Button from "../Button";
import CheckBox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Signup = () => {
    return ( 
        <>
        <h1>Create an account</h1>
        <div className="column">
            <Illustration pageName="signup" />
            <Form className={`${classes.signup}`}>
                <TextInput type="text" placeholder="Enter name" icon="person" />
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password" icon="lock" />
                <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                <CheckBox  type="checkbox" text="I agree to the Terms &amp; Conditions" />
                <Button>Submit now</Button>
                <div className="info">
                    Already have an account? <a href="login.html">Login</a> instead.
                </div>
            </Form> 
        </div>
        </>
    );
}
 
export default Signup;