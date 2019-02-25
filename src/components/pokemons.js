import React, {Component} from 'react';
import Pokemon from './pokemon';
import '../styles/pokemons.css';

class Pokemons extends Component {
  render(){
    return (
      <div className="pokemons">
        < div className='row'>
        { this.props.list.map((poke, i) =>

          <div key={i} className='col-md-6'>
            < Pokemon poke={poke}/>
            <button className="card-link btn btn-success btn-block" onClick={() => this.props.click(poke.id)} value={poke.id}> Show Evolution Chain of {poke.name}</button>
          </div>
        )}

        </div>
      </div>
    )
  }
}


export default Pokemons;
