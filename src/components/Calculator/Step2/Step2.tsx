import React from 'react';
import './Step2.scss';

import icon from '../../../assets/images/diagram.svg';
import Paragraph from '../../Paragraph/Paragraph';
import NextButton from '../../NextButton/NextButton';
import BackButton from '../../BackButton/BackButton';
import CalculatorNavigation from '../../CalculatorNavigation/CalculatorNavigation';

const Step2 = ({ estimatedSellInput, handleChange }: { estimatedSellInput: string, handleChange: any }) => (
  <div className='step2-container'>
    <div className='title'>
      <h1>Live PPV Event ROI Calculator</h1>
    </div>
    <Paragraph>
      Working with a Live PPV specialist can boost your conversion rate and ultimately your ROI.
    </Paragraph>
    <img src={icon} alt='icon' />
    <Paragraph>
      How many tickets do you estimate to sell?
    </Paragraph>

    <input
      id='estimatedSellInput'
      type='text'
      name='estimatedSellInput'
      value={estimatedSellInput}
      onChange={handleChange}
    />

    <NextButton name='next question' to='step3' />
    <BackButton name='back' to='step1' />
    <CalculatorNavigation step={2} />
  </div>
);

export default Step2;
