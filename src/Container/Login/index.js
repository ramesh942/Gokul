import React from 'react';

import LoginWidget from "./../../Component/LoginWidget";
import LoginHeader from "./../../Component/LoginHeader";
import './../Login/App.css';



function Login() {
  return (
    
    <div className="container-fluid h-100"  >
      <div className="row" style={{backgroundColor:"#41D9E6", height: "100vh"}}>
     
<LoginHeader/>
    <LoginWidget/>
  </div>
      
  </div>
  
  );
}

export default Login;
