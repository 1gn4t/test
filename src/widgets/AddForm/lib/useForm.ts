import { FormEvent, useRef } from 'react';
import { IPerson } from '../../../app/types/types';

export const useForm = () => {
  const formDataObj: Record<string, string | number | File> = {};
  const ref = useRef(formDataObj);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const myFormData = new FormData(e.target as HTMLFormElement);

    myFormData.forEach((value, key) => (formDataObj[key] = value));
  };

  const data: IPerson = {
    id: ref.current.id as number,
    firstName: ref.current.firstName as string,
    lastName: ref.current.lastName as string,
    email: ref.current.email as string,
    phone: ref.current.phone as string,
    address: {
      streetAddress: 'no information',
      city: 'no information',
      state: 'no information',
      zip: 'no information',
    },
    description: 'no information',
  };

  return { data, submit };
};
