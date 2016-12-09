import Inferno from 'inferno';
import Component from 'inferno-component';

class DinoList extends Component {
  render() {
    return(
      <div className="DinoList panel panel-default col-sm-6 col-sm-offset-3">
        <div className="panel-body">
          <h1>Dinosaurs</h1>
          <ul>
            {
              this.props.dinos.map((dino, idx) => (
                <li key={idx}>
                  {dino.name}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default DinoList;
