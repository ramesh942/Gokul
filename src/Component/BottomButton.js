import React from "react";


export default class Header extends React.Component {
  render() {
    return (
        <div className="col-md-12">
        <div className="pull-right"style={{float:"right"}}>
          <button className="btn">
            <span>Previous</span>
           
          </button>

          <button className="btn">
            <span>Next</span>
           
          </button>
        </div>
        
      </div>
      
    );
  }
}