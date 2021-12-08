import classes from "../../styles/login.module.css";
import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";
import {Link} from "react-router-dom";


const Login = () => {
    return ( 
        <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration pageName="login" />
            <Form className={`${classes.login}`}>
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password" icon="lock" />
                <Button><span>Submit now</span></Button>
                <div class="info">Don't have an account? <Link href="/signup">Signup</Link> instead.</div>
            </Form> 
        </div>
        </>
    );
}
 
export default Login;