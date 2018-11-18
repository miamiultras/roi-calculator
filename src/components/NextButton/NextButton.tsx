import React from 'react';
import { Link } from 'react-router-dom';

import './NextButton.scss';

const NextButton = ({ name, to, action }: { name: string, to: string, action?: any }) => (
  <div className='next-btn'>
    <Link to={`/calculator/${to}`}>
      <div className='container'>
        <button onClick={action}>
          <span>
            {name}
          </span>
          <div className='square'>
            <i className='arrow right' />
          </div>
        </button>
      </div>
    </Link>
  </div>
);

export default NextButton;
