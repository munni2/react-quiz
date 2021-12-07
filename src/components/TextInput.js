import classes from "../styles/textInput.module.css"
const TextInput = ({ icon, ...rest }) => {
    return ( 
        <div className={classes.textInput}>
            <input {...rest} />
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    );
}


// const TextInput = ({ props }) => {
//     return ( 
//         <div className={classes.textInput}>
//             <input {...props} />
//             <span className="material-icons-outlined"> person </span>
//         </div>
//     );
// }
 
export default TextInput;