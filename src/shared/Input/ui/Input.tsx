import { FC } from 'react';
import { typeChange } from '../lib/typeChange';
import { phoneMask } from '../lib/phoneMask';

interface InputProps {
  label?: string;
  handlerChange?: (text: string) => void | undefined;
  option?: string;
  type?: string;
  name?: string;
  pattern?: string;
  required?: boolean;
  placeholder?: string;
  value?: string | number;
}
export const Input: FC<InputProps> = ({
  label,
  handlerChange,
  option,
  type,
  name,
  pattern,
  required,
  placeholder,
  value,
}) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor='default-input'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          {label}
        </label>
      ) : null}
      <input
        value={value}
        required={required}
        name={name}
        onChange={(e) => {
          phoneMask(type, e);
          if (handlerChange) handlerChange(e.target.value);
        }}
        type={typeChange(option, type)}
        pattern={pattern}
        id='default-input'
        placeholder={placeholder}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
    </div>
  );
};
