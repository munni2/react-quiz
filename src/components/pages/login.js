import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "../../styles/login.module.css";
import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";
import {useAuth} from "../../contexts/Authcontext";


const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[loading, setLoading] = useState("");

    const {login} = useAuth();
    const history = useHistory();

    async function handellogin(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login (email, password);
            history.push("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to log in");
        }
    }


    return ( 
        <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration pageName="login" />
            <Form className={`${classes.login}`} onSubmit={handellogin}>
                <TextInput 
                    type="text" 
                    placeholder="Enter email"
                    icon="alternate_email" 
                    required
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                />

                <TextInput 
                    type="password" 
                    placeholder="Enter password" 
                    icon="lock" 
                    required
                    value={password}
                    onChange= {(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <Button disabled={loading} type="submit" ><span>Submit now</span></Button>
                <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
            </Form> 
        </div>
        </>
    );
}
 
export default Login;