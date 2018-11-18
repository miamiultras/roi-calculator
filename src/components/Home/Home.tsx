import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => (
  <div className='home-container'>
    <div className='title'>
      <h1>Live PPV Event ROI Calculator</h1>
    </div>
    <div className='description'>
      Ever wondered <strong>how much money you can generate </strong>
      with the Live Pay-Per-View model? Based on our experience in
      <strong> managing over 10,000 PPV</strong> events per year,
      we created this unique ROI calculator for you.
    </div>
    <Link to='/calculator'>
      <button>Give it a try!</button>
    </Link>
  </div>
);

export default Home;
