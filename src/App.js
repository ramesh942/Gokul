import React from 'react';
import logofile from "./logo.jpg"
import './App.css';


function App() {
  return (
    
    <div className="container-fluid h-100"  >
      <div className="row" style={{backgroundColor:"#41D9E6", height: "100vh"}}>
      <div className="col-md-4">
        
          

        <div className="row">
        <div className="col-md-2">
        <div className="logo">   
            <img src={logofile} className="logo" alt="Cinque Terre"></img>
          
        </div>   
      
      
      </div>
      <div className="col-md-2">
          <h2 style={{marginLeft:"50px",marginTop:"50px",color:"white"}} > Payference</h2>
      </div>
      
      </div>
      </div>
      <div className="col-md-4">
      <div className="row">
      <div className="login">
  <h5>Sign In</h5>
  <form>
  <p><input type="text" name="login"  placeholder="Username" required></input></p>
    <p><input type="password" name="password"  placeholder="Password" required></input></p>
    <div class="login-help">
  <p> <a href="#">Forgot your password?</a>.</p>
</div>
  <p class="submit"><input type="submit" name="commit" value="Login"></input></p>
  </form>
  </div>
  </div>
  </div>
      
  </div>
  </div>
  );
}

export default App;
