import Illustration from "../Illustration";
import SignupForm from "../signupFrom";

const Signup = () => {
    return ( 
        <>
        <h1>Create an account</h1>
        <div className="column">
            <Illustration pageName="signup" />
            <SignupForm></SignupForm>
        </div>
        </>
    );
}
 
export default Signup;