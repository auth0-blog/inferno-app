// src/components/DinoList.js

import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import DinoDetail from './DinoDetail';
import ApiService from './../utils/ApiService';
import './DinoList.css';
import loading from './../assets/raptor-loading.gif';

class DinoList extends Component {
  constructor(props) {
    super(props);

    // Set default loading state to false
    this.state = {
      loading: false
    };
  }

  /**
   * Handle dinosaur listing click
   * 
   * @param {number} id
   */
  getDinoById(id) {
    // Set loading state to true while data is being fetched
    this.setState({
      loading: true
    });

    // GET dino by ID
    // On resolve, set detail state and turn off loading
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
                  <a
                    className="DinoList-link"
                    onClick={linkEvent(this, () => this.getDinoById(dino.id))}>
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
