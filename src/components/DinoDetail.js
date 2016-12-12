import Inferno from 'inferno';
import Component from 'inferno-component';

class DinoDetail extends Component {
  render() {
    return(
      <div className="DinoList panel panel-default col-sm-6">
        <div className="panel-body">
          <h2>{this.props.dino.name}</h2>
        </div>
      </div>
    );
  }
}

export default DinoDetail;
