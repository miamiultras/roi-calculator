import React from 'react';
import './Step1.scss';

import icon from '../../../assets/images/computer-phone.svg';
import Paragraph from '../../Paragraph/Paragraph';
import NextButton from '../../NextButton/NextButton';
import CalculatorNavigation from '../../CalculatorNavigation/CalculatorNavigation';

const Step1 = ({ qualityLevel, handleChange }: { qualityLevel: string, handleChange: any }) => (
  <div className='step1-container'>
    <div className='title'>
      <h1>Live PPV Event ROI Calculator</h1>
    </div>
    <Paragraph>
      Working with a Live PPV specialist can save you a lot of time and development costs.
    </Paragraph>

    <img src={icon} alt='icon' />

    <Paragraph>
      When you are building your monetization platform,
      you consider the costs of design, streaming,
      along with landing page and e-commerce checkout development.
    </Paragraph>

    <Paragraph>
      What level of streaming quality are you aiming for?
    </Paragraph>

    <div className='level-holder'>
      <div className='input-container'>
        <input
          id='high'
          type='radio'
          name='qualityLevel'
          value='high'
          checked={qualityLevel === 'high'}
          onChange={handleChange}
        />
        <div className='label-container'>
          <label htmlFor='high'>High</label>
        </div>
      </div>
      <div className='input-container'>
        <input
          id='mid'
          type='radio'
          name='qualityLevel'
          value='mid'
          checked={qualityLevel === 'mid'}
          onChange={handleChange}
        />
        <div className='label-container'>
          <label htmlFor='mid'>Mid</label>
        </div>
      </div>
      <div className='input-container'>
        <input
          id='entry'
          type='radio'
          name='qualityLevel'
          value='entry'
          checked={qualityLevel === 'entry'}
          onChange={handleChange}
        />
        <div className='label-container'>
          <label htmlFor='entry'>Entry</label>
        </div>
      </div>
    </div>

    <NextButton name='next question' to='step2' />
    <CalculatorNavigation step={1} />
  </div>
);

export default Step1;
