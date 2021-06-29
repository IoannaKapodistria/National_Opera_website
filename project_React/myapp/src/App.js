import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar1,
  Footer,
  Home,
  Program,
  Play,
  Reservation,
  Seat,
} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1></Navbar1>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Program" exact component={() => <Program />} />
          <Route path="/Play" exact component={() => <Play />} />
          <Route path="/Reservation" exact component={() => <Reservation />} />
          <Route path="/Seat" exact component={() => <Seat />} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
