import { TRow } from './TRow';
import { IPerson } from '../../../app/types/types';
import { FC } from 'react';

export const TBody: FC<{
  data: IPerson[];
  handelClick: (person: IPerson) => void;
}> = ({ data, handelClick }) => {
  return (
    <tbody>
      {data.map((person: IPerson) => (
        <TRow
          person={person}
          key={person.id + person.phone}
          handelClick={handelClick}
        />
      ))}
    </tbody>
  );
};
