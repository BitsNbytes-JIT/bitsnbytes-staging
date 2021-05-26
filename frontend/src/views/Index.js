import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from '../assets/img/logo.png';
import '../assets/css/App.css';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing";
import Register from "../components/Register";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/login" component={Login} /> */}
          </div>
        </Router>
    );
  }
}
export default App;
