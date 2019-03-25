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
      pokemonByID:[],
      pokemonEvolutionData: [],
      poke1:[],
      poke2:[],
      poke3: []
      }
    }

//Fetch pokemon names and urls for additional information
  loadPokemons(){
  fetch('https://pokeapi.co/api/v2/pokemon-species')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        names: json.results
      }, () => {
        //fetch additional information
        this.loadPokemonAdditionalInfo()
      })
    })
    .catch(err => console.log(err))
  }

//Fetch additional information to show it on the screen
  loadPokemonAdditionalInfo() {
    const { names } = this.state;
    const promises = names.map(
    name => fetch(name.url)
    .then(response => response.json()).catch(err => console.log(err))
  )

//Promise all resolved results and save them to the pokemons array
  Promise.all(promises).then(results => {
    this.setState({
      pokemons: [...this.state.pokemons, ...results]
      })
    })
  }

//Toggle view for information to be displayed on the screen: evolution
  toggleView = (id) => {
    console.log(id);
    if(id){
      this.setState({
        showEvolution: true,
        isLoaded:false
        //fetch pokemon by id
      }, this.loadPokemon(id))
    }
  }

//Fetch pokemon by id for future evolution manipulations
  loadPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          pokemonByID: response
        }, () => {
          this.loadEvolutionChain()
        })
      })
      .catch(err => console.log(err))
    }

//Fetch evolution for selected by ID pokemon
  loadEvolutionChain() {
    const evolutionPoke = this.state.pokemonByID;
    fetch(evolutionPoke.evolution_chain.url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemonEvolutionData: data
        //transform this data to more readable
      }, () => this.transformData())
    })
    .catch(err => console.log(err))
  }

  transformData(){
    let evoChain = [];
    let evoData = this.state.pokemonEvolutionData.chain;

    do {
      const evoDetails = evoData['evolution_details'][0];

      evoChain.push({
        "name": evoData.species.name,
        "level": !evoDetails ? 1 : evoDetails.min_level,
        "trigger": !evoDetails ? null : evoDetails.trigger.name
      });

      evoData = evoData['evolves_to'][0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    this.setState({
      poke1: evoChain[0],
      poke2: evoChain[1],
      poke3: evoChain[2]
    })

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
            : <Evolution evoP1={this.state.poke1} evoP2={this.state.poke2} evoP3={this.state.poke3} />
          }



      </div>
    );
  }
}

export default App;
