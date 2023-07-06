'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const onCounterUpHandler = () => {
    setCount(prev => prev + 1);
  };
  const onCounterMinusHandler = () => {
    setCount(prev => prev - 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={onCounterUpHandler}>+ </button>
      <button onClick={onCounterMinusHandler}>-</button>
    </>
  );
}
