import React, { Component } from 'react';
import '../styles/App.css';
import Header from './views/header';
import Pokemons from './pokemons';
import Evolution from './evolution';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      names: [],
      isLoaded: false,
      showEvolution: false,
      response: [],
      response1:[],
      response1det:[],
      response2:[],
      response2det:[]
      }
    }

  loadPokemons(){
  fetch('https://pokeapi.co/api/v2/pokemon-species')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        names: json.results
      }, () => {
        this.loadPokemonAdditionalInfo()
      })
    })
  }

  loadPokemonAdditionalInfo() {
    const { names } = this.state;
    const promises = names.map(
    name => fetch(name.url)
    .then(response => response.json())
  )

  Promise.all(promises).then(results => {
    this.setState({
      pokemons: [...this.state.pokemons, ...results]
      })
    })
  }

  loadEvolutionChain(id){
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          response: response.chain.species,
          response1: response.chain.evolves_to[0].species,
          response1det: response.chain.evolves_to[0].evolution_details[0],
          response2: response.chain.evolves_to[0].evolves_to[0].species,
          response2det: response.chain.evolves_to[0].evolves_to[0].evolution_details[0]
        })
      })
  }

  toggleView = (id) => {
    console.log(id);
    if(id){
      this.setState({
        showEvolution: true,
        isLoaded:false
      }, this.loadEvolutionChain(id))
    }
  }

  componentDidMount(){
      this.loadPokemons();
  }

  render() {

    return (
      <div className="App">
        <Header />
          {
            this.state.isLoaded ?
            <div>
              <Pokemons list={this.state.pokemons} click={this.toggleView}/>
            </div>
            : <Evolution pokemon={this.state.response} pokemon1={this.state.response1} pokemon1det={this.state.response1det} pokemon2 ={this.state.response2} pokemon2det={this.state.response2det}/>
          }

      </div>
    );
  }
}

export default App;
