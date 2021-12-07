const CheckBox = ({text, ...rest}) => {
    return ( 
        <label>
            <input type="checkbox" {...rest} /> <span>{text}</span>
        </label>
    );
}
 
export default CheckBox;