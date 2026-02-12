'use client'

import   { useState } from 'react'

const page = () => {
const [toDo, setToDo] = useState(["Task 1", "Task 2", "Task 3"])
const [input, setInput] = useState("");

const addTask = () => setToDo([...toDo, input]);

const deleteTask = (index: number) => {
    const newToDo = [...toDo];
    newToDo.splice(index, 1);
    setToDo(newToDo);
}

console.log(toDo)

const userInput = (e: React.ChangeEvent<HTMLInputElement>) => {setInput(e.target.value)}

  return (
    <div className='min-h-screen items-center justify-center flex flex-col gap-4 text-white'>
        <h1 className='text-3xl font-bold underline'>Test Page</h1>
        <input value={input} onChange={userInput} type="text" placeholder='Enter task' className='px-4 py-2 rounded text-black' />
        <button onClick={addTask} className='bg-blue-500 text-white px-4 py-2 rounded'>Add Task</button>
        <ul>
            {toDo.map((task, index) => (
                <li key={index}>{task} <button onClick={() => deleteTask(index)} className='ml-2 bg-red-500 text-white px-2 py-1 rounded'>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default page