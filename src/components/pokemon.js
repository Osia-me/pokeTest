import React, {Component} from 'react';
import '../styles/pokemons.css';

class Pokemon extends Component {

  render(){
    return (
      <div className="pokemon">
          <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.poke.name.toUpperCase()}</h5>
                <div className="card-subtitle mb-2 text-muted">
                <p>Other names:</p>
                { this.props.poke.names.map((name) =>
                    <span> {name.language.name}: {name.name}, </span>
                )}</div>
                <p>
                  <span>Color: {this.props.poke.color.name}</span>
                  <span> | Capture rate: {this.props.poke.capture_rate}</span>
                  <span> | Shape: {this.props.poke.shape.name}</span>

                </p>
                
              </div>
            </div>
        </div>
    )
  }
}


export default Pokemon;
