import React, { useState } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoList from './toDoList'
import TodoForm from './toDoForm'

const URL = 'http://localhost:3003/api/todos/'

const Todo = (props) => {

    const [description, setDescription] = useState('')
    const [list, setList] = useState([])

    const descriptionStateControl = (e) => {
        setDescription(e.target.value)
    }

    const handleAdd = () => {
        axios.post(URL, {description})
            .then(resp => console.log("all right!"))
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