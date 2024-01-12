import { AddFormHeader } from './AddFormHeader';
import { AddFormBody } from './AddFormBody';
import { useForm } from '../lib/useForm';
import { useCreateMutation } from '../../../app/store/api';

export const AddForm = () => {
  const { data, submit } = useForm();
  const [addPerson] = useCreateMutation();

  return (
    <div className='relative overflow-x-auto'>
      <form
        onSubmit={async (e) => {
          submit(e);
          await addPerson(data);
        }}
      >
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <AddFormHeader />
          <AddFormBody />
        </table>
      </form>
    </div>
  );
};
