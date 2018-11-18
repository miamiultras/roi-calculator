import React from 'react';
import { Link } from 'react-router-dom';

import './BackButton.scss';

const BackButton = ({ name, to }: { name: string, to: string }) => (
  <div className='back-btn'>
    <Link to={`/calculator/${to}`}>
      <div className='container'>
        <button>
          <i className='arrow left' />
          <span>
            {name}
          </span>
        </button>
      </div>
    </Link>
  </div>
);

export default BackButton;
