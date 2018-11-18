import React from 'react';

import './CalculatorNavigation.scss';

const CalculatorNavigation = ({ step }: { step: number }) => (
  <div className='calculator-navigation'>
    <div className={`element ${step >= 1 && 'active'}`} />
    <div className={`element ${step >= 2 && 'active'}`} />
    <div className={`element ${step >= 3 && 'active'}`} />
  </div>
);

export default CalculatorNavigation;
