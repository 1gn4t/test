import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../../shared/Button/ui/Button';
import { useState } from 'react';
import { AddForm } from '../../AddForm';

export const Header = () => {
  const path = useLocation().pathname;
  const [toggleAdd, setToggleAdd] = useState(false);

  const handleClick = () => setToggleAdd(!toggleAdd);

  return (
    <>
      <div>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <div className='flex items-center lg:order-2'>
              <Link to={'/'}>
                <Button text='Home' />
              </Link>
            </div>
            {path.includes('data') && (
              <Button
                text='Add new person'
                mode='green'
                handelClick={handleClick}
              />
            )}
          </div>
        </nav>
      </div>
      {toggleAdd && <AddForm />}
    </>
  );
};
