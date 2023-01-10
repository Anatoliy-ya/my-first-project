import { useState } from 'react';
import Card from '../Card/Card';
import './TaskForm.css';
import { useContext } from 'react';
import { TaskList } from '../tasks-context';

export const TaskForm = (props) => {
  const ctx = useContext(TaskList);

  const [task, setTask] = useState('');
  // const [date, setDate] = useState('');

  const textTaskHandler = (event) => {
    setTask(event.target.value);
  };

  // const dateTaskHandler = (event) => {
  //   setDate(event.target.value)
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      id: Math.random(),
      description: task,
      switcher: 1,
      // data: new Date(date)
    };
    ctx.onNewTasks(taskData);
    setTask('');
  };

  return (
    <Card className="new-task__control">
      <form onSubmit={submitHandler}>
        <div className="new-task__text">
          <label> Новая задача </label>
          <br />
          <input placeholder="Текст задачи" type="text" value={task} onChange={textTaskHandler} />
        </div>
        {/* <input type='date' value={date} onChange={dateTaskHandler} /> */}
        <div className="new-task__act">
          <button type="submit">Добавить задачу</button>
        </div>
      </form>
    </Card>
  );
};
