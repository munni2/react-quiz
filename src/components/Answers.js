import CheckBox from "./Checkbox";
import classes from "../styles/anwser.module.css";

const Answers = () => {
    return ( 
        <div class={classes.answers}>
            <CheckBox className={classes.answer} text="text Anwser" />
        </div>
    );
}
 
export default Answers;