// src/components/DinoList.js

import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import DinoDetail from './../DinoDetail/DinoDetail';
import ApiService from './../../utils/ApiService';
import './DinoList.css';
import loading from './../../assets/raptor-loading.gif';

function getDinoById(obj) {
  const instance = obj.instance;
  const id = obj.dinoId;

  // Set loading state to true while data is being fetched
  // Set active state to index of clicked item
  instance.setState({
    loading: true,
    active: id
  });

  // GET dino by ID
  // On resolve, set detail state and turn off loading
  ApiService.getDino(id)
    .then(res => {
      instance.setState({
        detail: res,
        loading: false
      });
    });
}

class DinoList extends Component {
  constructor(props) {
    super(props);

    // Set default loading state to false
    this.state = {
      loading: false
    };
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
                    className={state.active === dino.id ? 'active' : ''}
                    onClick={linkEvent({instance: this, dinoId: dino.id}, getDinoById)}>
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
