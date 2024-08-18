import React, { useContext } from 'react'
import { todoContext } from '../../App'
import Todo from '../Todo/Todo'

export default function TodoList() {
    const {todoList,setTodoList} = useContext(todoContext)
    return (
        <div className='flex flex-col gap-2'>
            {todoList.map(todo => (
                <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>
            ))}
        </div>
    )
}
