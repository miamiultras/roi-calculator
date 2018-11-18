import React from 'react';
import './Step3.scss';

import icon from '../../../assets/images/tickets.svg';
import Paragraph from '../../Paragraph/Paragraph';
import NextButton from '../../NextButton/NextButton';
import BackButton from '../../BackButton/BackButton';
import CalculatorNavigation from '../../CalculatorNavigation/CalculatorNavigation';

const Step3 = (
  { pricePerTicket,
    handleChange,
    handleSubmit,
  }: {
      pricePerTicket: string,
      handleChange: any,
      handleSubmit: any,
    }) => (
    <div className='step3-container'>
      <div className='title'>
        <h1>Live PPV Event ROI Calculator</h1>
      </div>
      <Paragraph>
        Working with a Live PPV specialist can boost your conversion rate and ultimately your ROI.
    </Paragraph>
      <img src={icon} alt='icon' />
      <Paragraph>
        How much do you plan to charge per ticket for your Live PPV event?
    </Paragraph>

      <div className='currency-input'>
        <input
          id='pricePerTicket'
          type='text'
          name='pricePerTicket'
          value={pricePerTicket}
          onChange={handleChange}
        />
        <span className='currency-sign'>&euro;</span>
      </div>
      <NextButton name='see the results' to='step3' action={handleSubmit} />
      <BackButton name='back' to='step2' />
      <CalculatorNavigation step={3} />
    </div>
  );

export default Step3;
