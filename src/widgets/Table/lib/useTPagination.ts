import { useState } from 'react';

export const useTPagination = (data) => {
  const STEP = 10;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const next = () => {
    if (end < data.length) {
      setStart(start + STEP);
      setEnd(end + STEP);
    }
  };

  const prev = () => {
    if (start > 0) {
      setStart(start - STEP);
      setEnd(end - STEP);
    }
  };

  return { next, prev, start, end };
};
