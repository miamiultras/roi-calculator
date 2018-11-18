import React from 'react';

import Paragraph from '../../Paragraph/Paragraph';
import NextButton from '../../NextButton/NextButton';
import BackButton from '../../BackButton/BackButton';
import Table from '../Table/Table';
import { data } from './data.mock';

const Report = () => (
  <div className='container'>
    <h1>Live PPV Event ROI Calculator</h1>
    <Table data={data} />

    <Paragraph>
      Do you want to understand the logic behind this calculation? Grab your results and
      we will explain you everything about conversion rates, customer care and operation fees.
   </Paragraph>

    <NextButton name='find out now' to='extended-report' />
    <BackButton name='start again' to='' />
    <BackButton name='back' to='step3' />
  </div>
);

export default Report;
