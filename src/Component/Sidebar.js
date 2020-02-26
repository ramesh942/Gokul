import React from "react";


export default class Header extends React.Component {
  render() {
    return (
      <div className="col-md-2">

        <div className="list-group">
          <p className="justify-content-center" style={{display:""}}>
            <i className="fas fa-tachometer-alt mr-3" style={{display:"inline-block"}}></i>
            Dashboard
          </p>

          <p className="pull-left">
            <i className="fas fa-money-bill mr-3"></i>
            Payroll
          </p>

          <p className="pull-left" style={{ color: "#2a7fff" }}>
            <i className="fas fa-file-invoice-dollar mr-4"></i>
            Payables
          </p>

          <p className="pull-left">
            <i className="fas fa-hand-holding-usd mr-3"></i>
            Receivables
          </p>
          <p className="pull-left">
            <i className="fas fa-user-tag mr-3"></i>
            Vendors
          </p>
          <p className="pull-left">
            <i className="fas fa-users mr-3 "></i>
            customers
          </p>
          <p className="pull-left">
            <i className="fas fa-list mr-3 "></i>
            Reports
          </p>

          <p className="pull-left">
            <i className="fas fa-cog mr-3 "></i>
            Setting
          </p>
        </div>
        </div>
        
  
      
      
    );
  }
}