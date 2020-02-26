import React from "react";


export default class Header extends React.Component {
  render() {
    return (
        <div className="Button">
        <button className="btn">
          <i class="fas fa-sliders-h mr-2"></i>
          <span>Filter</span>
          <i className=" fas fa-caret-down ml-2"></i>
        </button>

        <button className="btn" style={{ float: "right" }}>
          <span>Export</span>
          <i className=" fas fa-caret-down ml-2"></i>
        </button>
      </div>
    );
  }
}