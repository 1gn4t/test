import { FC, useState } from 'react';
import { IPerson } from '../../../app/types/types';

import { Select } from '../../../shared/Select/ui/Select';
import { Input } from '../../../shared/Input/ui/Input';

interface FormFilterProps {
  filter: (option: keyof IPerson, text: string) => void;
}

export const TFormFilter: FC<FormFilterProps> = ({ filter }) => {
  const [option, setOption] = useState('id');

  const handlerChange = (text: string) => filter(option as keyof IPerson, text);

  return (
    <form className='max-w-sm mx-auto mb-6'>
      <Select
        options={['id', 'firstName', 'lastName', 'email', 'phone']}
        label='Filter by'
        handelChange={setOption}
      />
      <Input label='Filter' handlerChange={handlerChange} option={option} />
    </form>
  );
};
