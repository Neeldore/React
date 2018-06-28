import React, {Component} from 'react';
import './common/css/bootstrap.min.css'
import './App.css';

// import vue from './common/images/vue.jpg';
// // import react from './common/images/react.png';
// import angular from './common/images/angular.png';
// import coolGuy from './common/images/coolguy.jpg';
import profile from './profile.js';
import skills from './skills.js';
import blog from './Blog.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyActive: "HOME"
    }
  }
  determineActive = function (current) {}
  amIActive = function (current) {
    if (current === this.state.currentlyActive) 
      return 'active';
    }
  getPageFunc(){
    if(this.state.currentlyActive === "HOME")
      return profile();
    if(this.state.currentlyActive === "SKILL")
      return skills();
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
                  <a className="nav-link" onClick={()=>{
                    this.setState({
                      currentlyActive : "HOME"
                    })
                  }}>Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={()=>{
                    this.setState({
                      currentlyActive : "SKILL"
                    })
                  }}>Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={()=>{
                    this.setState({
                      currentlyActive : "BLOG"
                    })
                  }}>Blog</a>
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
