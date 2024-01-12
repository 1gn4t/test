import { useState } from 'react';
import { ArrayPersons, IPerson } from '../../../app/types/types';

export const useSortAndFilter = (data: ArrayPersons) => {
  const [arrData, setArrData] = useState(data);
  const [toggle, setToggle] = useState(false);

  const sortFn = (sort: keyof IPerson) => {
    if (!toggle) {
      const sortArray = [...arrData].sort((a, b) => {
        if (a[sort] > b[sort]) return 1;
        if (a[sort] < b[sort]) return -1;
        return 0;
      });
      setArrData(sortArray);
      setToggle(!toggle);
    } else {
      setArrData(data);
      setToggle(!toggle);
    }
  };

  const filterFn = (option: keyof IPerson, text: string | undefined) => {
    if (!text || !option) return setArrData(data);
    const filterArray = data.filter((person) =>
      person[option].toString().toLowerCase().includes(text.toLowerCase())
    );
    setArrData(filterArray);
  };

  return { arrData, sortFn, filterFn };
};
