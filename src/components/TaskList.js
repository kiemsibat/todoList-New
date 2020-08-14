import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    let {task} = props;
    let elmTasks = task.map((task,index,isComplete) => {
      return <TaskItem  key={task.id} index={index} task={task} isComplete={isComplete}/>
    })
    return(
        <>
        <table className="table table-bordered table-hover mt-5">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên</th>
                  <th className="text-center">Trạng Thái</th>
                  <th className="text-center">Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <select className="form-control">
                      <option value={-1}>Tất Cả</option>
                      <option value={0}>Ẩn</option>
                      <option value={1}>Kích Hoạt</option>
                    </select>
                  </td>
                  <td />
                </tr>
                {/* task item */}
               {elmTasks}            
              </tbody>
            </table>
       </>
    )
}

export default TaskList;