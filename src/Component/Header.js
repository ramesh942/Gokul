import React from "react";
import logofile from "./../Assets/logo.jpg";

export default class Header extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-2  border-right">
            <div className="sidebar ">
              <i className="fa fa-chevron-left "></i>
            </div>
          </div>
          <div className="col-md-2">
            <div className="logo">
              <img src={logofile} className="logo" alt="Cinque Terre"></img>
            </div>
          </div>
          {/* <div className="img"> */}
          {/* <i className="fa fa-search" /> */}
          {/* <img src={imgfile} className="img" alt="Cinque Terre"style={{marginTop:"8px"}}></img>
               <img src={imgfile} className="img" alt="Cinque Terre"></img>
               <img src={imgfile} className="img" alt="Cinque Terre"></img>
               <img src={imgfile} className="img" alt="Cinque Terre"></img>
               <img src={imgfile} className="img" alt="Cinque Terre"></img>
               <img src={imgfile} className="img" alt="Cinque Terre"></img>
               <img src={imgfile} className="img" alt="Cinque Terre"></img>
               <img src={imgfile} className="img" alt="Cinque Terre"></img> */}
          {/* </div> */}

          <div className="col-md-2 ">
            <div className="name">
              <p> Payference</p>
              {/* <h6 style={{marginTop:"10px"}}>DashBoard</h6>
             <h6>Payloll</h6>
             <h6>Receivables</h6>
             <h6>Vendor</h6>
             <h6>customer</h6>
             <h6>Reports</h6>
             <h6>Setting</h6> */}
            </div>
          </div>
        </div>
      </div>
      
      
    );
  }
}
