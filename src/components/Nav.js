import Account from "./Account";
import classes from '../styles/nav.module.css';
import logo from '../assets/images/logo-bg.png';
import {Link} from "react-router-dom";

const Nav = () => {
    return ( 
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/react-quiz" className={classes.brand}>
                        <img src={logo} alt="Learn something new" />
                        <h3>Site Name</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
 
export default Nav;