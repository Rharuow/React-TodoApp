import React, { useState, useEffect } from 'react'
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

    function refresh () {
        axios.get(`${URL}?sort=-createdAt`)
        .then(res => {
            setDescription('')
            setList(res.data)        
            })
    }

    const handleAdd = () => {
        axios.post(URL, {description})
            .then(resp => refresh())
    }

    useEffect(() => {
        refresh()
        console.log("useEffect")
        console.log("state description: ", description)  
        console.log("state list: ", list)
        console.log("---------------")
    }, [])

    return(
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm action={handleAdd} descriptionAction={descriptionStateControl}/>
            <TodoList list={list}/>
        </div>
    )
}

export default Todo