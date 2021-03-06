import React, {Component} from 'react';
import './common/css/bootstrap.min.css';
import './App.css';

import profile from './profile.js';
import Skills from './skills.js';
import blog from './Blog.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyActive: "BLOG"
    }
  }
  
  amIActive = function (current) {
    if (current === this.state.currentlyActive) 
      return 'active';
    }
  getPageFunc(){
    if(this.state.currentlyActive === "HOME")
      return profile();
    if(this.state.currentlyActive === "SKILL")
      return <Skills />
    if(this.state.currentlyActive === "BLOG")
      return blog();
  }
  render() {
    return (
      <div>
        <section>
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">Neelkant K Jain</span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto ">

                <li className="nav-item active">
                  <span style={{cursor:'pointer'}} className="nav-link" onClick={()=>{
                    this.setState({
                      currentlyActive : "HOME"
                    })
                  }}>Home
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="nav-item">
                  <span style={{cursor:'pointer'}} className="nav-link" onClick={()=>{
                    this.setState({
                      currentlyActive : "SKILL"
                    })
                  }}>Skills</span>
                </li>
                <li className="nav-item">
                  <span style={{cursor:'pointer'}} className="nav-link" onClick={()=>{
                    this.setState({
                      currentlyActive : "BLOG"
                    })
                  }}>Blog</span>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </section>
        <section>
          {this.getPageFunc()}
        </section>
      </div>

    );
  }
}

export default Header;
