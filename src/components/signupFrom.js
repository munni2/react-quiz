import React, { useState } from "react";
import Form from "./Form" 
import classes from "../styles/signup.module.css";
import TextInput from "./TextInput";
import Button from "./Button"
import CheckBox from "./Checkbox";
import { Link, useNavigate  } from "react-router-dom";
import {useAuth} from "../contexts/Authcontext";

const SignupForm = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[agree, setAgree] = useState("");
    const[error, setError] = useState("");
    const[loading, setLoading] = useState("");

    const {signup} = useAuth();
    const navigate = useNavigate();

    async function handelSubmit(e) {
        e.preventDefault();
        // do validation
        if (password !== confirmPassword) {
            return setError("Password don't match");
        }

        try {
            setError("");
            setLoading(true);
            await signup (email, password, username);
            // history.push("/");
            navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account");
        }
    }

    return ( 
        <Form className={`${classes.signup}`} onSubmit={handelSubmit}>
            <TextInput 
                type="text" 
                placeholder="Enter name" 
                icon="person"
                required
                value={username}
                onChange= {(e) => setUsername(e.target.value)}
             />
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
            <TextInput 
                type="password" 
                placeholder="Confirm password" 
                icon="lock_clock" 
                required
                value={confirmPassword}
                onChange= {(e) => setConfirmPassword(e.target.value)}
            />
            <CheckBox  
                type="checkbox" 
                text="I agree to the Terms &amp; Conditions" 
                value={agree}
                required
                onChange= {(e) => setAgree(e.target.value)}
            />

            {error && <p className="error">{error}</p>}

            <Button disabled={loading} type="submit"><span>Submit now</span></Button>
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form> 
     );
}
 
export default SignupForm;