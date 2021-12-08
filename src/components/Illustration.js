import classes from "../styles/illustration.module.css";
import signupImage from "../assets/images/signup.svg";
import loginImage from "../assets/images/login.svg";

 const Illustration = (props) => {
    return ( 
        <div className={classes.illustration}>
            <img src={props.pageName === 'signup' ? `${signupImage}` : `${loginImage}` } alt={props.pageName} />
        </div>
     );


    // if(props.text == 'signup') {
    //     return ( 
    //         <div className={classes.illustration}>
    //             <img src={signupImage} alt="Signup" />
    //         </div>
    //     );
    // }else {
    //     return ( 
    //         <div className={classes.illustration}>
    //             <img src={loginImage} alt="Login" />
    //         </div>
    //     );
    // }
}
 
export default Illustration;