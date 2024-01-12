import { FC } from 'react';
import { IPerson } from '../../../app/types/types';

export const TItemInfo: FC<{ data: IPerson }> = ({ data }) => {
  const { address, description, firstName, lastName } = data;
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Выбран пользователь <b>{firstName + ' ' + lastName}</b>
      </p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Описание: {description}
      </p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Адрес проживания: <b>{address.streetAddress}</b>
      </p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Город: <b>{address.city}</b>
      </p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Провинция/штат: <b>{address.state}</b>
      </p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Индекс: <b>{address.zip}</b>
      </p>
    </div>
  );
};
