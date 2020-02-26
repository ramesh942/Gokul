import React from "react";


export default class Header extends React.Component {
  render() {
    return (
        <div className="col-md-6 aligncenter">
        <div id="custom-search-input">
          <div class="input-group col-md-12">
            <input
              type="text"
              class="form-control input-lg"
              placeholder="Search for an invoice,customer and vindror"
            />
            <span class="input-group-btn">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="col-md-3">
        <div class="text-icon-big rounded-circle ">V</div>
      </div>
        </div>
       
      </div>
      
    );
  }
}