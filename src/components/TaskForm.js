import React, { useState } from "react";

function TaskForm(props) {
  const [name, setName] = useState([]);
  const [status, setStatus] = useState(false);
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Thêm Công Việc</h3>
      </div>
      <div className="panel-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(name,status);
            props.onSubmit(name, status);
          }}
        >
          <div className="form-group">
            <label>Tên :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              Thêm
            </button>
            &nbsp;
            <button type="submit" className="btn btn-danger">
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
