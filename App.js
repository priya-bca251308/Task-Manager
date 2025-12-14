import { useState,useEffect}from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

export default function App(){
  const[tasks,setTasks]=useState([]);
  const[filter,setFilter]=useState("all");

  useEffect(()=>{
    const stored=localStorage.getItem("tasks");
    if(stored)setTasks(JSON.parse(stored));
  },[]);

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(tasks));
  },[tasks]);

  const handleAdd=(task)=>setTasks([...tasks,task]);

  const handleToggle=(id)=>
    setTasks(
      tasks.map((t)=>(t.id===id?{...t,completed: !t.completed} :t))
    );

    const handleDelete=(id)=>setTasks(tasks.filter((t)=>t.id !==id));

    const filteredTasks=task.filter((task)=>
      filter==="Completed"
        ?task.completed
        :filter==="incompleted"
          ? !task.completed
          :true
    );

    return(
      <div className="max-w-2x1 mx-auto p-4"> 
      <h1 className="text-2x1 font-bold mb-4">Task Manager</h1>
      <TaskForm onAdd={handleAdd}/>
      <FilterBar filter={filter}setFilter={setFilter}/>
      <TaskList 
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        />
      </div>
    );
}