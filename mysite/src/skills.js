import React, {Component} from 'react';
// import me from './common/images/me.jpg';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentlyShowing: 1,
      title: "Analsysis of finanacial budget",
      subTitle: "2017-2018",
      description: "Using Candela.js Built a simple data visualization of the Financial budget repor" +
          "t of 2018-2019",
      link1: "Github",
      link2: "Heroku"
    }
  }

  detailsList(whichComponent) {
    if (whichComponent === this.state.currentlyShowing) 
      return (

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.title}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.state.subTitle}</h6>
            <p className="card-text">{this.state.description}</p>
            <a href="#" className="card-link">{this.state.link1}</a>
            <a href="#" className="card-link">{this.state.link2}</a>
          </div>
        </div>
      )
  }

  render() {
    return (
      <div>
        <div className="container continer-fluid">
          <div className="row">
            <div className="col col-md-12 text-center">
              <br/>
              <div className="display-4">Primary Skills/Projects</div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col col-md-2"></div>
            <div className="col col-md-8">
              <div className="list-group mx-3 mt-3">

                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                  this.setState({
                    currentlyShowing: 1,
                    title: "Analsysis of finanacial budget",
                    subTitle: "2017-2018",
                    description: "Using Candela.js Built a simple data visualization of the Financial budget repor" +
                        "t of 2018-2019"
                  })
                }}>Node.js</button>
                {this.detailsList(1)
}

                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                  this.setState({
                    currentlyShowing: 2,
                    title: "Bubble",
                    subTitle: "OMS Visbility system",
                    description: "Using Angular.js worked on Portal for OMS visibility system"
                  })
                }}>AngularJS</button>
                {this.detailsList(2)
}
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                  this.setState({
                    currentlyShowing: 3,
                    title: "NeelkantJain.com",
                    subTitle: "Profile Page",
                    description: "Built profile page/Blog on React "
                  })
                }}>React.js</button>
                {this.detailsList(3)
}
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                  this.setState({
                    currentlyShowing: 4,
                    title: "Analsysis of finanacial budget",
                    subTitle: "2017-2018",
                    description: "Using Candela.js Built a simple data visualization of the Financial budget repor" +
                        "t of 2018-2019"
                  })
                }}>Android Development</button>
                {this.detailsList(4)
}
              </div>
            </div>
            <div className="col col-md-2"></div>
          </div>

        </div>
      </div>
    );
  }
}
export default Skills;
