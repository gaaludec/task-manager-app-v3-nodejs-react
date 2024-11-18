import { useDeleteTask, useEditTask } from './hook';

/* eslint-disable react/prop-types */
const SingleItem = ({ task }) => {
  const { editTask } = useEditTask();
  const { deleteTask, isPending } = useDeleteTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => editTask({ taskId: task.id, isDone: !task.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: task.isDone && 'line-through',
        }}
      >
        {task.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isPending}
        onClick={() => deleteTask(task.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
