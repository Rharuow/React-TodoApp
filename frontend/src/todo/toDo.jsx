import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoList from './toDoList'
import TodoForm from './toDoForm'

const URL = 'http://localhost:3003/api/todos'

const Todo = (props) => {

    const [description, setDescription] = useState('')
    const [list, setList] = useState([])

    const refresh = (description = '') => {
        const search = description ? `&description__regex=/${description}/`: ''
        axios.get(`${URL}?sort=-createAt${search}`)
        .then(res => {
            setDescription(description)  
            setList(res.data)   
            })
    }

    const descriptionStateControl = (e) => {
        setDescription(e.target.value)
    }

    const handleAdd = () => {
        axios.post(URL, {description})
        .then( res => {
            refresh()
        })
    }

    const handleRemove = (todo) => {
        axios.delete(`${URL}/${todo._id}`)
        .then(res => refresh(description))
    }

    const handleMarkAsDone = (todo) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true })
        .then(res => refresh(description))
    }

    const handleMarkAsPending = (todo) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false })
        .then(res => refresh(description))
    }

    const handleSearch = (todo) => {
        refresh(description)
    }

    const handleClear = (todo) => {
        refresh()
    }

    useEffect(() => {
        refresh(description)
    }, [])

    return(
        <div>
            <PageHeader name="Tarefas" small="Cadastro"/>
            <TodoForm 
                action={handleAdd} 
                value={description} 
                handleSearch={handleSearch} 
                descriptionAction={descriptionStateControl} 
                handleClear={handleClear}
                />
            <TodoList 
                list={list} 
                handleRemove={handleRemove} 
                handleMarkAsDone={handleMarkAsDone} 
                handleMarkAsPending={handleMarkAsPending}
            />
        </div>
    )
}

export default Todo