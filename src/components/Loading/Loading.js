// src/components/Loading/Loading.js

import Inferno from 'inferno';
import Component from 'inferno-component';
import loading from './../../assets/raptor-loading.gif';

class Loading extends Component {
  render(props, state) {
    return(
      <div className="Loading">
        {
          !props.error ? (
            <img className="loading" src={loading} alt="Loading..." />
          ) : (
            <p className="alert alert-danger"><strong>Error:</strong> Could not retrieve data.</p>
          )
        }
      </div>
    );
  }
}

export default Loading;
