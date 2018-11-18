import React from 'react';

import './Paragraph.scss';

const Paragraph = ({ children }: { children: string }) => (
  <div className='paragraph'>
    <p>{children}</p>
  </div>
);

export default Paragraph;
