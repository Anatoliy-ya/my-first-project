import './App.css';
import { Tasks } from './component/Tasks';
import { useContext } from 'react';
import React from 'react';
import Input from './input';
import { TaskList } from './tasks-context';
import Navibar from './Navibar';

function App(props) {
  const ctx = useContext(TaskList);

  return (
    <React.Fragment>
      <div>
        <Navibar />
      </div>
      <div className="app">
        <Tasks />
      </div>
    </React.Fragment>
  );
}

export default App;
