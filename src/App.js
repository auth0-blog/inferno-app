import Inferno from 'inferno';
import Component from 'inferno-component';
import ApiService from './utils/ApiService';
import DinoList from './components/DinoList';
import loading from './assets/raptor-loading.gif';
import './App.css';

class App extends Component {
  componentDidMount() {
    ApiService.getDinos()
      .then(res => {
        this.setState({
          dinos: res
      });
    });
  }

  render() {
    return(
      <div className="App container-fluid">
        <h1 className="text-center">Dinosaurs</h1>

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
    );
  }
}

export default App;
