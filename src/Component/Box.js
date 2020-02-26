import React from "react";


export default class Header extends React.Component {
  render() {
    return (
        <div className="row">
        <div
          className="col-md-2"
          style={{
            backgroundColor: "gray",
            marginLeft: "20px",
            borderRadius: "5%",
            height: "100%",
            transition: "0.5s",
            hover:"ope",
          }}
        >
          <text>Total Ammount</text>
          <h5>$30,440</h5>
        </div>

        <div
          className="col-md-2"
          style={{
            backgroundColor: "red",
            marginLeft: "20px",
            borderRadius: "5%"
          }}
        >
          <text>Critical</text>
          <h5>$9,177</h5>
        </div>
        <div
          className="col-md-2"
          style={{
            backgroundColor: "#fd7e14",
            marginLeft: "20px",
            borderRadius: "5%"
          }}
        >
          <text>High</text>
          <h5>$2,767</h5>
        </div>
        <div
          className="col-md-2"
          style={{
            backgroundColor: "#ffc107",
            marginLeft: "20px",
            borderRadius: "5%"
          }}
        >
          <text>Medium</text>
          <h5>$8,012</h5>
        </div>

        <div
          className="col-md-2"
          style={{
            backgroundColor: "#28a745",
            marginLeft: "20px",
            borderRadius: "5%"
          }}
        >
          <text>Low</text>
          <h5>$10,483</h5>
        </div>
      </div>
      
    );
  }
}