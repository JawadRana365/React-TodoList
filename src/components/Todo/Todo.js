import React from 'react'

export default function Todo({todo, setTodoList}) {

    const todoStatusChange = () => {
        setTodoList(prevTodoList => {
            return prevTodoList.map(prevTodo => {
                if(prevTodo.id == todo.id){
                    return {
                        ...todo,
                        status: !todo.status
                    }
                }else{
                    return prevTodo
                }
            })
        })
    }

    const deleteTodo = () => {
        setTodoList(prevTodoList => {
            return prevTodoList.filter(prevTodo => prevTodo.id != todo.id)
        })
    }

    return (
        <div className='flex flex-row justify-between w-96 border border-white py-3 px-4'>
            <div class="flex items-center mb-4">
                <input 
                    id="checkbox" 
                    type="checkbox" 
                    value={todo.id} 
                    checked={todo.status}
                    onChange={todoStatusChange}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label 
                    for="checkbox" 
                    class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >{todo.task}</label>
            </div>
            <button onClick={deleteTodo} className='bg-white text-sm text-neutral-600 px-2 py-1'>Delete</button>
        </div>
    )
}
