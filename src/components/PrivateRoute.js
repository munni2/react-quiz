import { useAuth } from '../contexts/Authcontext';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    const {currentuser} = useAuth();
    return currentuser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    ) : (
        <Redirect to="/login" />
    );
}
 
export default PrivateRoute;