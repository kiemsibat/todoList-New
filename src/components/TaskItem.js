import React from 'react';

const TaskItem = (props) => {
   const  onHandleClick = () => {
     console.log(props.task);
   }
    return(
        <>
        <tr onClick={onHandleClick}>
                  <td>{props.index}</td>
                  
                  <td>{props.task.name}</td>
                  <td className="text-center">
                    <span className="label label-success">
                      {props.task.isComplete ? 'Kích hoạt' : 'Ẩn' }
                    </span>
                  </td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning">
                      <span className="fa fa-pencil mr-5" />Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                      <span className="fa fa-trash mr-5" />Xóa
                    </button>
                  </td>
                </tr>
        </>
    )
}

export default TaskItem