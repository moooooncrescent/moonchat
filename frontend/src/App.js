import { history } from "./history";
import { Switch, Route, Router } from "react-router-dom";
import NotFound from './pages/notfound/index';
import SignIn from './pages/signin/index';
import SignUp from './pages/signup/index';
import Messenger from './pages/msg/index';
import Forgot from "./pages/forgot";

function App() {
  return (
    <div className="App">
         <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
 <Router history={history}>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/msg" exact component={Messenger} />
          <Route path='/forgot' exact component={Forgot} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
