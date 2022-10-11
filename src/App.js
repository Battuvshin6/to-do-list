import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

function App() {
  //ToDO list tasks
  const [toDo, setToDO] = useState([]);
  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
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
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDO(newTasks);
  };
  //Marked finished task
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDO(newTask);
  };
  //Cancel Update
  const cancelUpdate = () => {
    setUpdateData("");
  };
  //Change Task
  const ChangeTask = (e) => {
    let newUpdate = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newUpdate);
  };
  //Update Task
  const updateTask = () => {
    let filterTask = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedTask = [...filterTask, updateData];
    setToDO(updatedTask);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <h2>To Do Lists</h2>
      <br />
      {/* Update Task*/}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          cancelUpdate={cancelUpdate}
          ChangeTask={ChangeTask}
          updateTask={updateTask}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display Todos*/}
      {toDo && toDo.length ? "" : "No tasks..."}
      <ToDo
        toDo={toDo}
        deleteTask={deleteTask}
        markDone={markDone}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
