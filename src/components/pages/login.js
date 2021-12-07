import classes from "../../styles/login.module.css";
import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";


const Login = () => {
    return ( 
        <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration pageName="login" />
            <Form className={`${classes.login}`}>
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password" icon="lock" />
                <Button>Submit now</Button>
                <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
            </Form> 
        </div>
        </>
    );
}
 
export default Login;