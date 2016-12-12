import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import DinoDetail from './DinoDetail';
import ApiService from './../utils/ApiService';
import './DinoList.css';
import loading from './../assets/raptor-loading.gif';

class DinoList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };
  }

  getDinoById(id) {
    this.setState({
      loading: true
    });

    ApiService.getDino(id).then(res => {
      this.setState({
        detail: res,
        loading: false
      });
    });
  }

  render() {
    return(
      <div>
        <div className="DinoList col-sm-4">
          <ul>
            {
              this.props.dinos.map((dino, idx) => (
                <li key={idx}>
                  <a className="DinoList-link" onClick={linkEvent(this, () => this.getDinoById(dino.id))}>
                    <strong>{dino.name}</strong>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        {
          this.state.loading ? (
            <img className="loading" src={loading} alt="Loading..." />
          ) : (
            <DinoDetail dino={this.state.detail} />
          )
        }
      </div>
    );
  }
}

export default DinoList;
