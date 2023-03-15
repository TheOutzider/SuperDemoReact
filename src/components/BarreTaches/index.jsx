import React from 'react';
import Burger from '../Burger/index'
import TimeDisplay from '../TimeDate';

function BarreTaches() {
  return (
    <div className='header'>
      <Burger />
      <TimeDisplay />
    </div>
  );
}

export default BarreTaches