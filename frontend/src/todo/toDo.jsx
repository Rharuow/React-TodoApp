import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoList from './toDoList'
import TodoForm from './toDoForm'

const URL = 'http://localhost:3003/api/todos'

const Todo = (props) => {

    const [description, setDescription] = useState('')
    const [list, setList] = useState([])

    const refresh = () => {
        axios.get(`${URL}?sort=+createdAt`)
        .then(res => {
            console.log("REFRESH")
            console.log("DESCRIPTION: ", description)  
            setList(res.data)   
            })
    }

    const descriptionStateControl = (e) => {
        setDescription(e.target.value)
    }

    const handleAdd = () => {
        axios.post(URL, {description})
        .then( res => {
            console.log("handleAdd")
            console.log("DESCRIPTION: ", description)
            setDescription('')
            refresh()
        })
    }

    const handleRemove = (todo) => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => refresh())
    }

    useEffect(() => {
        refresh()
        console.log("useEffect")
        console.log("DESCRIPTION: ", description)  
        console.log("---------------")
    }, [])

    return(
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm action={handleAdd} value={description} descriptionAction={descriptionStateControl}/>
            <TodoList list={list} handleRemove={handleRemove}/>
        </div>
    )
}

export default Todo