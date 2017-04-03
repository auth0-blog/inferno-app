// src/App.js

import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import Auth0Lock from 'auth0-lock';
import ApiService from './utils/ApiService';
import DinoList from './components/DinoList/DinoList';
import Login from './components/Login/Login';
import User from './components/User/User';
import Loading from './components/Loading/Loading';
import './App.css';

function logOut(instance) {
  // Remove token and profile from state
  // (using instance passed in by linkEvent to preserve "this" context)
  instance.setState({
    idToken: null,
    profile: null
  });

  // Remove token and profile from localStorage
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
}

class App extends Component {
  constructor() {
    super();

    // Initial authentication state:
    // check for existing token and profile
    this.state = {
      idToken: localStorage.getItem('id_token'),
      profile: JSON.parse(localStorage.getItem('profile'))
    };
  }

  componentDidMount() {
    // Create Auth0 Lock instance
    this.lock = new Auth0Lock('[YOUR_CLIENT_ID]', '[YOUR_DOMAIN].auth0.com');

    // On successful authentication:
    this.lock.on('authenticated', (authResult) => {
      // Use the returned token to fetch user profile
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) { return; }

        // Save token and profile to state
        this.setState({
          idToken: authResult.accessToken,
          profile: profile
        });

        // Save token and profile to localStorage
        localStorage.setItem('id_token', this.state.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });

    // GET list of dinosaurs from API
    ApiService.getDinoList()
      .then(
        res => {
          // Set state with fetched dinos list
          this.setState({
            dinos: res
          });
        },
        error => {
          // An error occurred, set state with error
          this.setState({
            error: error
          });
        }
      );
  }

  render(props, state) {
    return(
      <div className="App">
        <header className="App-header bg-primary clearfix">
          <div className="App-auth pull-right">
            {
              !state.idToken ? (
                <Login lock={this.lock} />
              ) : (
                <div className="App-auth-loggedIn">
                  <User profile={state.profile} />
                  <a
                    className="App-auth-loggedIn-logout"
                    onClick={linkEvent(this, logOut)}>Log Out</a>
                </div>
              )
            }
            </div>
          <h1 className="text-center">Dinosaurs</h1>
        </header>
        <div className="App-content container-fluid">
          <div className="row">
            {
              state.dinos ? (
                <DinoList dinos={state.dinos} />
              ) : (
                <Loading error={state.error} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
