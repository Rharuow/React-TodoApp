import React from 'react'
import PageHeader from '../template/pageHeader'
import TodoList from './toDoList'
import TodoForm from './toDoForm'

const Todo = (props) => {
    return(
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}

export default Todo