// import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import StackOverflow from "./components/StackOverflow/";
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  redirect,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch >
          <Route exact path="/" component={StackOverflow}></Route>
        </Switch >
      </Router>
    </div>
  );
}

export default App;
