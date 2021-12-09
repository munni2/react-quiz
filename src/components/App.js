import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../styles/App.css";
import Layout from "./Layout";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import Login from "./pages/login";
import Home from "./pages/Home";
import Signup from "./pages/sign-up";
import { AuthProvider } from "../contexts/Authcontext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/quiz" element={<Quiz/>} />
            <Route exact path="/result" element={<Result/>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;   
