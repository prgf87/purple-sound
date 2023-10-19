import Header from '@/components/Header';
import React from 'react';

type Props = {};

function services({}: Props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <ul className="grid grid-cols-2 mx-auto">
          <li className="service-box">1</li>
          <li className="service-box">1</li>
          <li className="service-box">1</li>
          <li className="service-box">1</li>
          <li className="service-box">1</li>
          <li className="service-box">1</li>
        </ul>
      </div>
    </div>
  );
}

export default services;
