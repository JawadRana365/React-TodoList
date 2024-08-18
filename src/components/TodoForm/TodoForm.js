import React, { useContext, useState } from 'react'
import { todoContext } from '../../App';

export default function () {
    const {todoList,setTodoList} = useContext(todoContext)
    const[task,setTask] = useState("") 

    const handleSubmit = e => {
        e.preventDefault();
        task &&
            setTodoList([
                ...todoList,
                {
                    id: todoList.length,
                    task: task,
                    status: false
                }
            ])

    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-row justify-between w-96'>
            <input 
                type='text' 
                className='text-black px-2'
                onChange={e => setTask(e.currentTarget.value)}
            />
            <input 
                type='submit'
                className='bg-white text-sm text-neutral-600 px-2 py-1'
                value={"Create Task"}
            />
        </form>
    )
}
