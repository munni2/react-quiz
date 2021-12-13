import classes from '../styles/nav.module.css';
import {Link} from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";

const Account = () => {
    const  { currentUser, logout } = useAuth();

    return ( 
        <div className={classes.account}>

            {currentUser ? (
                <>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span className="material-icons-outlined" title="Logout" onClick={logout}> 
                        {""}
                        logout {""}
                    </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Log in</Link>
                </>
            )}
        </div>
    );
}
 
export default Account;