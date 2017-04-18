// src/components/Login/Login.js

import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import './Login.css';

// Use the "auth0" prop passed in App.js to
// call authorize method to show hosted Auth0
// Lock widget so users can log in
function login(instance) {
  instance.props.auth0.authorize({
    responseType: 'token id_token',
    redirectUri: 'http://localhost:3000/',
    audience: 'http://localhost:3001/api/',
    scope: 'openid profile'
  });
}

class Login extends Component {
  render() {
    return(
      <div className="Login">
        <a onClick={linkEvent(this, login)}>Log In</a>
      </div>
    );
  }
}

export default Login;
