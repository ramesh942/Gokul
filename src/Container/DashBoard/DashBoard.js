import React from "react";
import Payable from "./../DashBoard/Payables";
import Receivables from "./../DashBoard/Receivables";
import Home from "./Home";
import "./../DashBoard/DashBoard.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class DashBoard extends React.Component {
  state = {
    workers: [
      { id: 1, name: "Ramesh" },
      { id: 2, name: "Kiran" },
      { id: 3, name: "Lalit" },
      { id: 4, name: "Durvankur" },
      { id: 5, name: "Purnesh" },
      { id: 6, name: "Priyanka" },
      { id: 7, name: "Umale" },
      { id: 8, name: "Rana" },
      { id: 9, name: "Shenha" },
      { id: 10, name: "jp" }
    ],
    student: [
      { id: 1, name: "Aabhi" },
      { id: 2, name: "virat" },
      { id: 3, name: "Sachin" },
      { id: 4, name: "Durvankur" },
      { id: 5, name: "Purnesh" },
      { id: 6, name: "Priyanka" },
      { id: 7, name: "Umale" },
      { id: 8, name: "Rana" },
      { id: 9, name: "Shenha" },
      { id: 10, name: "JP" }
    ]
  };
  render() {
    return (
      <Switch>
        <Route exact path="/DashBoard/payable">
          <Payable workers={this.state.workers}
             student={this.state.student}  />
        </Route>
        <Route exact path="/DashBoard/receivables">
          <Receivables 
          student={this.state.student} 
          workers={this.state.workers}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default DashBoard;
