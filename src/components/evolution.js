import React, {Component} from 'react';
import '../styles/evolution.css';

class Evolution extends Component {

  render(){

    return(
      <div className='evolution'>
        <h2 >Here is the evolution chain of {this.props.evoP1.name}</h2>

        <div className='row'>
        <div className='col-md-4'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.evoP1.name}</h5>
              <div className="card-subtitle mb-2 text-muted">first</div>
              <p>Min level: 1</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.evoP2.name}</h5>
              <div className="card-subtitle mb-2 text-muted">{this.props.evoP2.trigger}</div>
              <p>On {this.props.evoP2.level} level</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.evoP3.name}</h5>
              <div className="card-subtitle mb-2 text-muted">{this.props.evoP3.trigger}</div>
              <p>On {this.props.evoP3.level} level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Evolution;
