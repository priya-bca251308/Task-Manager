import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [formm, setform] = useState({
    title: "",
    due: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setform({ ...formm, [e.target.name]: e.target.value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!formm.title||!formm.due)return;

    onAdd({
        ...formm,
        id:Date.now(),
        completed:false,
    });

    setform({title:"",due:"",priority:"Low"});
  };

  return(
    <form
        onSubmit={handleSubmit}
        className="p-4 border rounded bg-white shadow mb-4"
    >
    <input
    name="title"
    value={form.title} 
    onChange={handlechange}   
    placeholder="Task Title"
    className="block w-full p-2 border rounded mb-2"
    required
    />

    <input
    type="date"
    name="due"
    value={form.due}
    onChange={handleChange}
    className="block w-full p-2 border rounded mb-2"
    required
    />
    <select
    name="priority"
    value={form.priority}
    onChange={handleChange}
    className="block w-full p-2 border rounded mb-2"
    >
    <option>
        Low
    </option>
    <option>Medium</option>
    <option>High</option>
    </select>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Task</button>
    </form>    
  );
}
