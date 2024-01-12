import { FC } from 'react';
import { IPerson } from '../../../app/types/types';

interface SelectProps {
  options: string[];
  label: string;
  handelChange: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ options, label, handelChange }) => {
  return (
    <>
      <label
        htmlFor='countries'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <select
        onChange={(e) => handelChange(e.target.value as keyof IPerson)}
        id='countries'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
