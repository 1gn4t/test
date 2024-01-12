import { useGetDataQuery } from '../../app/store/api';
import { useParams } from 'react-router-dom';
import { Table } from '../../widgets/Table';
import { Spinner } from '../../shared/Spinner';

const DataPage = () => {
  const { amount } = useParams();
  const numAmount = Number(amount?.match(/\d+/));

  const { data } = useGetDataQuery(numAmount);

  return <div>{data ? <Table data={data} /> : <Spinner />}</div>;
};

export default DataPage;
