import React from 'react';

import Paragraph from '../../Paragraph/Paragraph';
import BackButton from '../../BackButton/BackButton';
import Table from '../Table/Table';
import { Service } from '../../../interfaces/service.interface';

const ExtendedReport = ({ extendedData }: { extendedData: Service[] }) => (
  <div className='container'>
    <h1>Live PPV Event ROI Calculator</h1>
    <Paragraph>
      Dear User, based on your entries we did the math for you:
   </Paragraph>
    <Table data={extendedData} />
    <BackButton name='start again' to='' />
  </div>
);

export default ExtendedReport;
