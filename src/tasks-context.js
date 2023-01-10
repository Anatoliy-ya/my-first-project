import React from 'react';
import { useState } from 'react';

const BaseTasks = [
  {
    // массив с задачами
    id: 1,
    description: 'Изучение React 3 часа',
    switcher: 1,
  },
];

export const TaskList = React.createContext({
  tasks: BaseTasks,
  onNewTasks: (task) => {},
  onAddChangeTask: (id, switcher) => {},
});

export const TasksListProvider = (props) => {
  const [tasks, setTasks] = useState(BaseTasks);
  console.log(tasks); // Вывод самого обновленного массива

  const addTasks = (adds) => {
    // функция принимающая новую задачу от TaskForm
    setTasks((prevTasks) => {
      return [adds, ...prevTasks];
    });
  };

  const addChangeTask = (id, switcher) => {
    if (id === tasks.id) {
      setTasks((prevTasks) => {
        return [(prevTasks.switcher = switcher)];
      });
    }
  };

  return (
    <TaskList.Provider value={{ tasks, onNewTasks: addTasks, onAddChangeTask: addChangeTask }}>
      {props.children}
    </TaskList.Provider>
  );
};

// {
//   id: 'c1',
//   description: 'Изучение React 3 часа',
//   del: 1,
// },
// {
//   id: 'c2',
//   description: 'Чтение книги Грокаем алгоритмы',
//   del: 1,
// },
// {
//   id: 'c3',
//   description: 'Досмотреть 3 часть курса по React',
//   del: 1,
// },
// {
//   id: 'c4',
//   description: 'Повторить JS',
//   del: 2,
// },
