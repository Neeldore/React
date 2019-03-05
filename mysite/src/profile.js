import React from 'react';
import me from './common/images/me.jpg';
import logo from './common/images/GitHub_Logo.png';

  export default function profile(){
        return (
    
          <div className="container container-fluid ">
    
            <div className="row">
              <div className="col col-md-4"></div>
              <div className="col col-md-4">
                  <div className="image-holder my-3">
                      <img src={me} className="image-center-main" />
                  </div>
              </div>
              <div className="col col-md-4"></div>
            </div>
            <div className="row mb-2">
              <div className="col col-md-12">
                <div className="display-4 text-center description-text">Full Stack developer | Blogger | Movie enthusiast | Cuber </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col col-md-4"></div>
              <div className="col col-md-4 text-center">
                <blockquote className="blockquote ">
                  <p className="summary">Hey everyone, my name is Neelkant .This site serves as my blog and also as my profile page .
                  I like developing on Javascript , be it frontend or backend and my blogs mostly comprise of some technical tutorials of niche problems i face and solve 
                  </p>
                </blockquote>
              </div>
              <div className="col col-md-4"></div>
            </div>
          </div>
    
        );
      }

