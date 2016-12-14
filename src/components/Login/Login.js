// src/components/Login/Login.js

import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import './Login.css';

class Login extends Component {
  // Use the "lock" prop passed in App.js to
  // show the Auth0 Lock widget so users can log in
  showLock(instance) {
    instance.props.lock.show();
  }

  render() {
    return(
      <div className="Login">
        <a onClick={linkEvent(this, this.showLock)}>Log In</a>
      </div>
    );
  }
}

export default Login;
