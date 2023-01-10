import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TasksListProvider } from './tasks-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TasksListProvider>
    <App />
  </TasksListProvider>,
);

// ReactDOM.render(
//   <TasksListProvider>
//     <App />
//   </TasksListProvider>,
//   document.getElementById('root'),
// );
