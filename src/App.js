import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function App() {
  //ToDO list tasks
  const [toDo, setToDO] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2 ", status: false },
  ]);
  // Temp State
  const { newTask, setNewTask } = useState("");
  const { updateData, newUpdateData } = useState("");
  // Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newNum = { id: num, title: newTask, status: false };
      setToDO([...toDo, newNum]);
      setNewTask("");
    }
  };
  //Delete task
  const deleteTask = (id) => {
    //
  };
  //Marked finished task
  const markDone = (id) => {};
  //Cancel Update
  const cancelUpdate = () => {};
  //Change Task
  const ChangeTask = (e) => {};
  //Update Task
  const updateTask = (e) => {};
  return (
    <div className="container App">
      <br />
      <h2>To Do Lists</h2>
      <br />
      {/* Update Task*/}
      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20">Update</button>
          <button className="btn btn-lg btn-warning">Cancel</button>
        </div>
      </div>
      <br />

      {/* Add Task */}
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      <br />
      {/* Display Todos*/}
      {toDo && toDo.length ? "" : "No tasks..."}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="wrap">
                    <span title="Completed / Not completed">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span title="Delete">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;
