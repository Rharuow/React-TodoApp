import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoList from './toDoList'
import TodoForm from './toDoForm'

const URL = 'http://localhost:3003/api/todos'

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