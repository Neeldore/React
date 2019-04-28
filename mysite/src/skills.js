import React, { Component } from "react";
// import me from './common/images/me.jpg';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyShowing: 1,
      title: ["Analsysis of finanacial budget"],
      subTitle: ["2017-2018"],
      description: [
        "Using Candela.js Built a simple data visualization of the Financial budget repor" +
          "t of 2018-2019"
      ],
      link1: ["Github" , "Github"],
      link2: ["Heroku" , "Heroku"],
      noOfProjects: 1
    };
  }

  getFinalDetailsList(i) {
    return (
      <div className="card" key={i}>
        <div className="card-body">
          <h5 className="card-title">{this.state.title[i]}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {this.state.subTitle[i]}
          </h6>
          <p className="card-text">{this.state.description[i]}</p>
          <a href="#" className="card-link">
            {this.state.link1[i]}
          </a>
          <a href="#" className="card-link">
            {this.state.link2[i]}
          </a>
        </div>
      </div>
    );
  }

  detailsList(whichComponent) {
    var finalMap = [];
    if (whichComponent === this.state.currentlyShowing)
      for (var a = 0; a < this.state.noOfProjects; a++)
        finalMap.push(this.getFinalDetailsList(a));
    return finalMap;
  }

  render() {
    return (
      <div>
        <div className="container continer-fluid">
          <div className="row">
            <div className="col col-md-12 text-center">
              <br />
              <div className="display-4">Primary Skills/Projects</div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col col-md-2" />
            <div className="col col-md-8">
              <div className="list-group mx-3 mt-3">
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    var identifier = 1;
                    if (this.state.currentlyShowing === 1) identifier = 0;
                    this.setState({
                      currentlyShowing: identifier,
                      title: ["Analsysis of finanacial budget"],
                      noOfProjects: 1,
                      subTitle: ["2017-2018"],
                      description: [
                        "Using Candela.js Built a simple data visualization of the Financial budget repor" +
                          "t of 2018-2019"
                      ]
                    });
                  }}
                >
                  Node.js
                </button>
                {this.detailsList(1)}

                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    var identifier = 3;
                    if (this.state.currentlyShowing === 3) identifier = 0;
                    this.setState({
                      currentlyShowing: identifier,
                      noOfProjects: 1,
                      title: ["NeelkantJain.com"],
                      subTitle: ["Profile Page"],
                      description: ["Built profile page/Blog on React "]
                    });
                  }}
                >
                  React.js
                </button>
                {this.detailsList(3)}
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    var identifier = 4;
                    if (this.state.currentlyShowing === 4) identifier = 0;
                    this.setState({
                      currentlyShowing: identifier,
                      noOfProjects: 2,
                      title: ["AcharyaOne ", "Locked Out"],
                      subTitle: ["2017-2018", "2017-2018"],
                      description: [
                        "App designed for the department of CSE which contained Information information on Timetables/Syllabus/Faculty information.. etc",
                        "Android Application which made the user more productive"
                      ]
                    });
                  }}
                >
                  Android Development
                </button>
                {this.detailsList(4)}
              </div>
            </div>
            <div className="col col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
