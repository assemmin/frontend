import React from 'react';
import StepCounter from './StepCounter';

const CounterApp = () => {
  return (
    <div>
      <h1>Lab 3.1: Advanced Counter</h1>
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
};

export default CounterApp;