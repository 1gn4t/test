import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';

const MainPage = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 min-h-48 items-center justify-center font-bold text-white'>
        <div className='text-center text-5xl font-bold'>
          Select amount of data
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <Link to={'/data-1000'}>
            <Button text='Big Data' />
          </Link>
          <Link to={'/data-32'}>
            <Button text='Small Data' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
