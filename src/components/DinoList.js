import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import DinoDetail from './DinoDetail';
import ApiService from './../utils/ApiService';

class DinoList extends Component {
  getDinoById(id) {
    ApiService.getDino(id).then(res => {
      this.setState({
        detail: res
      });

      console.log('got a dino', this.state.detail);
    });
  }

  render() {
    return(
      <div>
        <div className="DinoList panel panel-default col-sm-6">
          <div className="panel-body">
            <h1>Dinosaurs</h1>

            <ul>
              {
                this.props.dinos.map((dino, idx) => (
                  <li key={idx}>
                    <strong>{dino.id} - {dino.name}</strong>
                    <button onClick={linkEvent(this, () => this.getDinoById(dino.id))}>Show Details</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        {
          this.state.detail ? (
            <DinoDetail dino={this.state.detail} />
          ) : ''
        }
      </div>
    );
  }
}

export default DinoList;
