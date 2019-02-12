import React, {Component} from 'react';
import '../styles/evolution.css';

class Evolution extends Component {

  render(){

    return(
      <div className='evolution'>
      <h2>Here is the evolution chain of {this.props.pokemon.name}</h2>
        <div class='row'>
        <div class='col-md-4'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.pokemon.name}</h5>
              <div className="card-subtitle mb-2 text-muted">First</div>
              <p>Min level: 1</p>
            </div>
          </div>
        </div>
        <div class='col-md-4'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.pokemon1.name}</h5>
              <div className="card-subtitle mb-2 text-muted">Upgrade</div>
              <p>On {this.props.pokemon1det.min_level} level</p>
            </div>
          </div>
        </div>
        <div class='col-md-4'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.pokemon2.name}</h5>
              <div className="card-subtitle mb-2 text-muted">Upgrade</div>
              <p>On {this.props.pokemon2det.min_level} level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Evolution;
