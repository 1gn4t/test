import { FC } from 'react';
import { Input } from '../../../shared/Input';
import { Button } from '../../../shared/Button';

export const AddFormBody: FC = () => {
  return (
    <tbody>
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
        <td className='px-3 py-4'>
          <Input name='id' type='number' required={true} placeholder='111' />
        </td>
        <td className='px-3 py-4'>
          <Input
            name='firstName'
            type='text'
            pattern='^[a-zA-Z ]*$'
            required={true}
            placeholder='John'
          />
        </td>
        <td className='px-3 py-4'>
          <Input
            name='lastName'
            type='text'
            pattern='^[a-zA-Z ]*$'
            required={true}
            placeholder='Doe'
          />
        </td>
        <td className='px-3 py-4'>
          <Input
            name='email'
            type='email'
            required={true}
            placeholder='mail@e.com'
          />
        </td>
        <td className='px-3 py-4'>
          <Input
            name='phone'
            type='tel'
            required={true}
            placeholder='(111)111-1111'
          />
        </td>
        <td className='px-3 py-1'>
          <Button text='Add' type='submit' />
        </td>
      </tr>
    </tbody>
  );
};
