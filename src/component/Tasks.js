import { TasksList } from './TasksList';
import { TaskForm } from './TaskForm';
import { ButtonControl } from './ButtonControl';
import Card from '../Card/Card';
import './Tasks.css';
import { useContext } from 'react';
import { TaskList } from '../tasks-context';

export const Tasks = (props) => {
  const ctx = useContext(TaskList);

  const changeTasks = (tsks) => {
    if (tsks === 2) {
      let changetasks = {};
      props.onChangeTasks(changetasks);
    }
  };

  const filterTasks = ctx.tasks.filter((task) => {
    //проверяем что задачи действующие
    return task.switcher === 1;
  });

  const changeTask = (switcher, id) => {
    //передать измененый объект
    console.log(switcher, id);
    let tsk = ctx.tasks.map((el) => (id === el.id ? { ...el, switcher: el.switcher + 1 } : el));
    return;
  };
  return (
    <div>
      <div className="new-task">
        <TaskForm />
      </div>
      <div className="task__list">
        <h2>ЗАДАЧИ</h2>
        <ul className="task-list__text">
          {filterTasks.map((el) => (
            <li key={el.id} type="none">
              <TasksList key={el.id} description={el.description} />
              <div className="block-button">
                <ButtonControl //Кнопка Выполнения
                  switcher={el.switcher}
                  onClick={changeTask(el.switcher, el.id)}
                  id={el.id}>
                  Выполнено
                </ButtonControl>
                <ButtonControl // Кнопка Удаления
                  style={{ backgroundColor: 'red' }}
                  className="control-delete"
                  switcher={el.switcher}
                  id={el.id}>
                  Удалить
                </ButtonControl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* <TasksList  
        description={props.tasks.description}
        date={props.tasks.date}
        /> */
