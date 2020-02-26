import React from "react";


export default class Header extends React.Component {
  render() {
    return (
      
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
    );
  }
}