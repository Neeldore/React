import React from 'react';
// import me from './common/images/me.jpg';

  export default function profile(){
        return (
    
          <div className="container container-fluid ">
    
            <div className="row">
              <div className="col col-md-4"></div>
              <div className="col col-md-4">
                <span>
                  <div className="image-container my-3">
                    <div>
                      {/* <img src={me} alt="something" className="image-profile rounded"/> */}
                    </div>
                  </div>
                </span>
              </div>
              <div className="col col-md-4"></div>
            </div>
            <div className="row mb-2">
              <div className="col col-md-2"></div>
              <div className="col col-md-8">
                <div className="display-4 text-center description-text">Frontend/Mobile developer | Blogger | Movie enthusiast </div>
              </div>
              <div className="col col-md-2"></div>
            </div>
            <div className="row">
              <div className="col col-md-4"></div>
              <div className="col col-md-4 text-center">
                <blockquote className="blockquote ">
                  <p className="mb-0">Hey everyone, my name is Neelkant .This site serves as my blog and also as my profile page .
                  I like developing on Javascript , be it frontend or backend and my blogs mostly comprise of some technical tutorials of niche problems i face and solve 
                  </p>
                </blockquote>
              </div>
              <div className="col col-md-4"></div>
            </div>
          </div>
    
        );
      }

