import React from 'react';

function Counter({ count }) {
  return (
    <label htmlFor="count" className="mb2">
      Word count: <output id="count">{count}</output>
    </label>
  );
}

export default Counter;
