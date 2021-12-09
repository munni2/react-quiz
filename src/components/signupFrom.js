import Form from '/Form'; 
import classes from "../../styles/signup.module.css";
import TextInput from "../TextInput";
import Button from "../Button";
import CheckBox from "../Checkbox";
import Form from "../Form";
import {Link} from "react-router-dom";
import {useAuth} from "../contexts/Authcontext";

const SignupForm = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[agree, setAgree] = useState("");

    const {signup} = useAuth();

    return ( 
        <Form className={`${classes.signup}`}>
            <TextInput 
                type="text" 
                placeholder="Enter name" 
                icon="person"
                value={username}
                onChange= {(e) => setUsername(e.target.value)}
             />
            <TextInput 
                type="text" 
                placeholder="Enter email" 
                icon="alternate_email" 
                value={email}
                onChange= {(e) => setEmail(e.target.value)}
            />
            <TextInput 
                type="password" 
                placeholder="Enter password" 
                icon="lock" 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
            />
            <TextInput 
                type="password" 
                placeholder="Confirm password" 
                icon="lock_clock" 
                value={confirmPassword}
                onChange= {(e) => setConfirmPassword(e.target.value)}
            />
            <CheckBox  
                type="checkbox" 
                text="I agree to the Terms &amp; Conditions" 
                value={agree}
                onChange= {(e) => setAgree(e.target.value)}
            />
            <Button><span>Submit now</span></Button>
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form> 
     );
}
 
export default SignupForm;