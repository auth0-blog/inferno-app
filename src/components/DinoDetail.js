import Inferno from 'inferno';
import Component from 'inferno-component';

class DinoDetail extends Component {
  render() {
    let dino = this.props.dino;

    return(
      <div className="DinoList col-sm-8">
        {
          this.props.dino ? (
            <div className="list-group">
              <div className="list-group-item active">
                <h3 className="list-group-item-heading text-center">{dino.name}</h3>
              </div>
              <div className="list-group-item">
                <h4 className="list-group-item-heading">Pronunciation</h4>
                <p className="list-group-item-text">{dino.pronunciation} <em>({dino.meaningOfName})</em></p>
              </div>
              <div className="list-group-item">
                <h4 className="list-group-item-heading">Period</h4>
                <p className="list-group-item-text">{dino.period} ({dino.mya} million years ago)</p>
              </div>
              <div className="list-group-item">
                <h4 className="list-group-item-heading">Diet</h4>
                <p className="list-group-item-text">{dino.diet}</p>
              </div>
              <div className="list-group-item">
                <h4 className="list-group-item-heading">Length</h4>
                <p className="list-group-item-text">{dino.length}</p>
              </div>
              <div className="list-group-item">
                <p
                  className="list-group-item-text lead"
                  dangerouslySetInnerHTML={{__html: dino.info}}></p>
              </div>
            </div>
          ) : (
            <p className="lead"><em>Select a dinosaur to see details.</em></p>
          )
        }
        
      </div>
    );
  }
}

export default DinoDetail;
