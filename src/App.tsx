import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="banner">
        <div className="gradient">
          <div className="title-container">
            <div className="title">
              <h1>Live PPV Event ROI Calculator</h1>
            </div>
            <div className="description">
              Ever wondered <strong>how much money you can generate </strong>
              with the Live Pay-Per-View model? Based on our experience in
              <strong> managing over 10,000 PPV</strong> events per year,
               we created this unique ROI calculator for you.
            </div>
            <a href="">
              <button>
                Give it a try!
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
