import React, {Component} from 'react';
import './common/css/bootstrap.min.css'
import './App.css';

import vue from './common/images/vue.jpg';
// import react from './common/images/react.png';
import angular from './common/images/angular.png';
import coolGuy from './common/images/coolguy.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyActive: 1
    }
  }
  determineActive = function (current) {}
  amIActive = function (current) {
    if (current === this.state.currentlyActive) 
      return 'active';

    }
  carousel() {
    return (
      <div>
        <section>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className={this.amIActive(0)}
                onClick={() => this.setState({currentlyActive: 0})}></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className={this.amIActive(1)}
                onClick={() => this.setState({currentlyActive: 1})}></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
                className={this.amIActive(2)}
                onClick={() => this.setState({currentlyActive: 2})}></li>
            </ol>
            <div className="carousel-inner ">
              <div className={'carousel-item ' + this.amIActive(0)}>
                <img className="d-block w-100 " src={angular} alt="First slide"/>
              </div>
              <div className={'carousel-item ' + this.amIActive(1)}>
                <img className="d-block w-100" src={vue} alt="Second slide"/>
              </div>
              <div className={'carousel-item ' + this.amIActive(2)}>
                <img className="d-block w-100 " src={coolGuy} alt="Third slide"/>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.carousel()}
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
                  <a className="nav-link">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Education</a>
                </li>
                <li className="nav-item">
                  <span className="navbar-text">Hey there!</span>
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
      </div>
    );
  }
}

export default Header;
