import Inferno from 'inferno';
import Component from 'inferno-component';
import ApiService from './../utils/ApiService';

class DinoDetail extends Component {
  componentWillMount() {
    console.log('will mount', this.props.dinoId);
    
    ApiService.getDino(this.props.dinoId).then(res => {
      this.setState({
        dino: res
      });

      console.log('got a dino', this.state.dinoDetail);
    });
  }

  render() {
    return(
      <div className="DinoList panel panel-default col-sm-6">
        {
          this.state.dino ? (
            <div className="panel-body">
              <h1>{this.state.dino.name}</h1>
            </div>
          ) : (
            <div className="loading">Loading...</div>
          )
        }
        
      </div>
    );
  }
}

export default DinoDetail;
