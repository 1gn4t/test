import { FC } from 'react';
import { IPerson } from '../../../app/types/types';

export const TRow: FC<{
  person: IPerson;
  handelClick: (person: IPerson) => void;
}> = ({ person, handelClick }) => {
  const { id, firstName, lastName, email, phone } = person;
  return (
    <tr
      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
      onClick={() => handelClick(person)}
    >
      <td className='px-3 py-3'>{id}</td>
      <td className='px-3 py-4'>{firstName}</td>
      <td className='px-3 py-4'>{lastName}</td>
      <td className='px-3 py-4'>{email}</td>
      <td className='px-3 py-4'>{phone}</td>
    </tr>
  );
};
