import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import Login from "./pages/login";
import Home from "./pages/Home";
import Signup from "./pages/sign-up";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { AuthProvider } from "../contexts/Authcontext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz" component={Quiz} />
            <PrivateRoute exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;   
