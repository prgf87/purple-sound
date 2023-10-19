import React from 'react';
import data from '@/data/data.json';

type Props = {};

function Process({}: Props) {
  console.log(data);
  return (
    <div className="flex justify-center items-center py-20">
      <h1 className="text-7xl">our process</h1>
    </div>
  );
}

export default Process;
