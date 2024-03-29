import { FC } from 'react';

interface IPaginationProps {
  prev: () => void;
  next: () => void;
  start: number;
  end: number;
  total: number;
}

export const TPagination: FC<IPaginationProps> = ({
  prev,
  next,
  start,
  end,
  total,
}) => {
  return (
    <nav
      className='flex items-center flex-column flex-wrap md:flex-row justify-between pt-4'
      aria-label='Table navigation'
    >
      <span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
        Showing
        <span className='font-semibold text-gray-900 dark:text-white'>
          {end > total ? ` ${start}-${total} ` : ` ${start}-${end} `}
        </span>
        of
        <span className='font-semibold text-gray-900 dark:text-white'>
          {` ${total} `}
        </span>
      </span>
      <div className='inline-flex gap-1 -space-x-px rtl:space-x-reverse text-sm h-8'>
        <button
          onClick={prev}
          className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Previous
        </button>
        <button
          onClick={next}
          className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Next
        </button>
      </div>
    </nav>
  );
};
