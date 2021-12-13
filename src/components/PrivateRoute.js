import { useAuth } from '../contexts/Authcontext';
import {Route, Navigate } from "react-router-dom";

const PrivateRouter = ({component: Component, ...rest}) => {
    const {currentuser} = useAuth();
    return currentuser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    ) : (
        <Navigate to="/login"></Navigate>
    );
}
 
export default PrivateRouter;