import React, {Component} from 'react';
import '../../styles/header.css';


class Header extends Component {

  render(){
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Pokemon App</a>
        <form
        className="form-inline

        ">
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for pokemon"
          aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
  }



export default Header;
