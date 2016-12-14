// src/components/DinoList.js

import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import DinoDetail from './../DinoDetail/DinoDetail';
import ApiService from './../../utils/ApiService';
import './DinoList.css';
import loading from './../../assets/raptor-loading.gif';

class DinoList extends Component {
  constructor(props) {
    super(props);

    // Set default loading state to false
    this.state = {
      loading: false
    };
  }

  getDinoById(id, idx) {
    // Set loading state to true while data is being fetched
    // Set active state to index of clicked item
    this.setState({
      loading: true,
      active: idx
    });

    // GET dino by ID
    // On resolve, set detail state and turn off loading
    ApiService.getDino(id)
      .then(res => {
        this.setState({
          detail: res,
          loading: false
        });
      });
  }

  render(props, state) {
    return(
      <div>
        <div className="col-sm-3">
          <ul className="DinoList">
            {
              props.dinos.map((dino, idx) => (
                <li key={idx}>
                  <a
                    className={state.active === idx ? 'active' : ''}
                    onClick={linkEvent(this, () => this.getDinoById(dino.id, idx))}>
                    {dino.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        {
          state.loading ? (
            <img className="loading" src={loading} alt="Loading..." />
          ) : (
            <DinoDetail dino={state.detail} />
          )
        }
      </div>
    );
  }
}

export default DinoList;
