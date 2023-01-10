import { useState } from 'react';
import './ButtonControl.css';

export const ButtonControl = (props) => {
  const btn = 'control-finesh' + props.className;

  return (
    <div>
      <div className={btn}>
        <button>{props.children}</button>
      </div>
    </div>
  );
};

// const finesh = () => {
//   //выполнение задачи
//   let finTask = props.tasks.map((el) =>
//     el.del === 1 && el.id === props.id
//       ? {
//           ...el,
//           del: el.del + 1,
//         }
//       : el,
//   );
//   props.onChangeTask(finTask);
//   console.log(finTask);
// };

// const delTask = () => {
//   //удаление задачи
//   let finTask = props.tasks.map((el) =>
//     el.del === 1 && el.id === props.tasks.id
//       ? {
//           ...el,
//           del: (el.del = 0),
//         }
//       : el,
//   );
//   props.onChangeTask(finTask);
//   console.log(finTask);
// };
