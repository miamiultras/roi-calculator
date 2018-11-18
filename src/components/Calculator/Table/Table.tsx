import React from 'react';
import './Table.scss';
import { Service } from '../../../interfaces/service.interface';

const Table = ({ data }: { data: Service[] }) => (
  <div className='table-container'>
    <table>
      <thead>
        <tr>
          <th />
          <th>Home Grown</th>
          <th>
            <img src='https://cdn-statics.cleeng.com/branding/images/logo-small.png?v=db9a54bbc7' alt='Cleeng' />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((service: Service) => (
          <tr key={service.name + Math.random()}>
            <td>{service.name}</td>
            <td>{service.homeGrown}</td>
            <td>{service.cleeng}</td>
          </tr>))
        }
      </tbody>
    </table>
  </div>
);

export default Table;
