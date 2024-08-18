import React, { Fragment, useContext, useEffect } from 'react'
import { todoContext } from '../../App'
import TodoList from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'

export default function TodoContainer() {
    const {todoList,setTodoList} = useContext(todoContext)

    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-3xl font-bold underline">
                Completed Task : {todoList.filter(todo => todo.status).length}
            </h1>
            <Fragment>
                <TodoList/>
            </Fragment>
            <Fragment>
                <TodoForm/>
            </Fragment>
        </div>
    )
}
