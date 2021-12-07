import classes from "../styles/illustration.module.css";
import signupImage from "../assets/images/signup.svg";
import loginImage from "../assets/images/login.svg";

 const Illustration = (props) => {
    // if(props.text == 'signup') {
    //     <img src={signupImage} alt="Signup" />
    // }else {
    //     <img src={loginImage} alt="Login" />
    // }

    // const filtered = selectedGenre && selectedGenre._id
    // ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
    // : allMovies;

    return ( 
        <div className={classes.illustration}>
            <img src={props.pageName == 'signup' ? `${signupImage}` : `${loginImage}` } alt={props.pageName} />
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