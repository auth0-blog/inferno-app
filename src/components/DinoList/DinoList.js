// src/components/DinoList.js

import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import DinoDetail from './../DinoDetail/DinoDetail';
import ApiService from './../../utils/ApiService';
import './DinoList.css';
import loading from './../../assets/raptor-loading.gif';

/* 
  This function is pulled out of the class to 
  demonstrate how we could easily use third-party APIs
*/
function getDinoById(id) {
  // Set loading state to true while data is being fetched
  // Set active state to index of clicked item
  this.setState({
    loading: true,
    active: id
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

class DinoList extends Component {
  constructor(props) {
    super(props);

    // Set default loading state to false
    this.state = {
      loading: false
    };

    // Bind the get dino function to pass 'this' context for setState
    this.getDinoById = getDinoById.bind(this);
  }

  render(props, state) {
    return(
      <div className="DinoList">
        <div className="col-sm-3">
          <ul className="DinoList-list">
            {
              props.dinos.map((dino) => (
                <li key={dino.id}>
                  <a
                    className={state.active === dino.id ? 'active' : ''}
                    onClick={linkEvent(dino.id, this.getDinoById)}>
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
