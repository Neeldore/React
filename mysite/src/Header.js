import React, { Component } from 'react';
import './common/css/bootstrap.min.css'
import './App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand" >Neelkant K Jain</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
            
              <li className="nav-item active">
                <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Education</a>
              </li>
              <li className="nav-item">
                <span className="navbar-text">Hey there!</span>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
