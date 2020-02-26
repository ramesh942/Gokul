import React from "react";
import logofile from "./../Assets/logo.jpg";


export default class Header extends React.Component {
  render() {
    return (
        <div className="col-md-4">
        
          

        <div className="row" style={{marginTop:"20px"}}>
        <div className="col-md-2"style={{marginLeft:"10px"}}>
        <div className="logo"  >   
            <img src={logofile} className="logo" alt="Cinque Terre"></img>
          
        </div>  
      </div>
      <div className="col-md-2 pull-left">
          <h2 style={{color:"white"}} > Payference</h2>
      </div>
      
      </div>
      </div>
      
    );
  }
}