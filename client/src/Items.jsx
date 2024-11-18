import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const data = await customFetch.get('/');
      return data;
    },
  });

  if (isPending) return <p>loading task</p>;
  if (isError) return <p>there was an error ...</p>;
  if (error) return <p>{error.message}</p>;
  // if (error) return <p>{error.response.data}</p>;

  console.log(data);
  return (
    <div className="items">
      {data.data.taskList.map((task) => (
        <SingleItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default Items;
