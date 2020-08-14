import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
function App() {
  const onSubmit = (data) => {
  
    console.log(data)
  }
  const [task,setTask] = useState([]);
  const [isShow,setIsShow] = useState(false)
  const eltTaskForm = isShow ? <TaskForm onSubmit={onSubmit} /> : '';
  
 
  const onHandleData = () =>{
    let tasks = [
      {
        id:1,
        name:'Do Homework',
        isComplete:true,
      },
      {
        id:2,
        name:'Do Housework',
        isComplete:true,
      },
      {
        id:3,
        name:'Clean my house',
        isComplete:false,
      },
    ]
    setTask(tasks);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  useEffect(() => {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      setTask(tasks)
  },[])

  const addForm = () => {
    setIsShow(!isShow);
  }
  return (  
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className={isShow ? 'col-xs-4' : ''}>
          {/* taskForm */}
          {eltTaskForm}
        </div>
        <div className={isShow ? 'col-xs-8' : 'col-xs-12'}>
          <button onClick={addForm} type="button" className="btn btn-primary">
            Thêm Công Việc
          </button>
          <button onClick={onHandleData} type="button" className="btn btn-warning">
     
            Generate Data
          </button>
          {/* control */}
          <Control />
          <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* tasklist */}
              <TaskList task={task}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
