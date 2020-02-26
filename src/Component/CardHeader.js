import React from "react";


export default class Header extends React.Component {
  render() {
    return (
        <div
                class="col-md-12"
                style={{
                  textAlign: "center",
                  backgroundColor: "#fff",
                  marginTop: "10px",
                  hover:"red"
                }}
              >
                <h5>PayIQ</h5>
              </div>
    );
  }
}