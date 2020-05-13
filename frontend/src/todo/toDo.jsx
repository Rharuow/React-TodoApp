import React, { useState } from 'react'
import PageHeader from '../template/pageHeader'
import TodoList from './toDoList'
import TodoForm from './toDoForm'

const Todo = (props) => {

    const [description, setDescription] = useState('')
    const [list, setList] = useState([])

    const descriptionStateControl = (e) => {
        setDescription(e.target.value)
    }

    const handleAdd = () => {
        console.log(this)
    }

    return(
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm action={handleAdd} descriptionAction={descriptionStateControl}/>
            <TodoList/>
        </div>
    )
}

export default Todo