import Inferno from 'inferno';
import Component from 'inferno-component';
import './App.css';
import ApiService from './utils/ApiService';
import DinoList from './components/DinoList';

class App extends Component {
  // constructor() {
  //   super();

  //   ApiService.getDinos().then(res => {
  //     this.state = {
  //       dinos: res
  //     };

  //     console.log('got dinos', this.state.dinos);
  //   });
  // }

  componentDidMount() {
    ApiService.getDinos().then(res => {
      this.setState({
        dinos: res
      });

      console.log('got dinos', this.state.dinos);
    });
  }

  render() {
    return(
      <div className="App container-fluid">
        <div className="row">
          {
            this.state.dinos ? (
              <DinoList dinos={this.state.dinos} />
            ) : (
              <div className="loading">Loading...</div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
