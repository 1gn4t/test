import { FC, useState } from 'react';
import { TBody } from './TBody';
import { THeader } from './THeader';
import { TPagination } from './TPagination';
import { useTPagination } from '../lib/useTPagination';
import { ArrayPersons, IPerson } from '../../../app/types/types';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { TFormFilter } from './TFormFilter';
import { TItemInfo } from './TItemInfo';
import { objectIsEmpty } from '../../../app/lib/objectIsEmpty';

export const Table: FC<{ data: ArrayPersons }> = ({ data }) => {
  const { start, end, prev, next } = useTPagination(data);
  const { arrData, sortFn, filterFn } = useSortAndFilter(data);
  const [selectedItem, setSelectedItem] = useState({} as IPerson);

  return (
    <div className='relative overflow-x-auto'>
      <TFormFilter filter={filterFn} />
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <THeader sortFn={sortFn} />
        <TBody data={arrData.slice(start, end)} handelClick={setSelectedItem} />
      </table>
      <TPagination
        prev={prev}
        next={next}
        start={start}
        end={end}
        total={arrData.length}
      />
      {objectIsEmpty(selectedItem) || <TItemInfo data={selectedItem} />}
    </div>
  );
};
