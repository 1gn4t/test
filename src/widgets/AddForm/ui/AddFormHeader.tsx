import { FC } from 'react';

export const AddFormHeader: FC = () => {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr>
        <th scope='col' className='px-3 py-3'>
          <div className='flex items-center'>id</div>
        </th>
        <th scope='col' className='px-3 py-3'>
          <div className='flex items-center'>firstName</div>
        </th>
        <th scope='col' className='px-3 py-3'>
          <div className='flex items-center'>lastName</div>
        </th>
        <th scope='col' className='px-3 py-3'>
          <div className='flex items-center'>email</div>
        </th>
        <th scope='col' className='px-3 py-3'>
          <div className='flex items-center'>phone</div>
        </th>
        <th scope='col' className='px-3 py-3'>
          <div className='flex items-center' />
        </th>
      </tr>
    </thead>
  );
};
