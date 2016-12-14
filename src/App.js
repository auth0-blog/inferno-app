// src/App.js

import Inferno from 'inferno';
import Component from 'inferno-component';
import ApiService from './utils/ApiService';
import DinoList from './components/DinoList/DinoList';
import loading from './assets/raptor-loading.gif';
import './App.css';

class App extends Component {
  componentDidMount() {
    // GET list of dinosaurs from API
    ApiService.getDinoList()
      .then(res => {
        // Set state with fetched dinos list
        this.setState({
          dinos: res
        });
      });
  }

  render() {
    return(
      <div className="App">
        <header className="App-header bg-primary">
          <h1 className="text-center">Dinosaurs</h1>
        </header>
        <div className="App-content container-fluid">
          <div className="row">
            {
              this.state.dinos ? (
                <DinoList dinos={this.state.dinos} />
              ) : (
                <img className="loading" src={loading} alt="Loading..." />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
