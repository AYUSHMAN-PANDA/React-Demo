import SignUp from "./SignUp";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
