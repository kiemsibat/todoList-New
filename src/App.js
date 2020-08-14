import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
function App() {

  const [task,setTask] = useState([]);

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

  return (  
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* taskForm */}
          <TaskForm />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
        
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
