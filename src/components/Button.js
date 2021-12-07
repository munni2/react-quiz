import classes from "../styles/button.module.css";
const Button = ({children}) => {
    return ( 
        <div className={classes.button}>
            <span>{children}</span>
        </div>
    );
}
 
export default Button;