import React, { useEffect } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import { changeDescription, search, addTodo } from '../actions/todoActions'

const TodoForm = props => {

    useEffect(() => {
        props.search()
    }, [])
    
    const keyHandler = (e) => {
        const { addTodo, search, description } = props
        if (e.key === "Enter") {
            e.shiftKey ? search() : addTodo(description)
        } else if(e.key === "Escape") {
            props.handleClear()
        }
    }
    
    return(
        <div role="form" className="todoForm">

        <Grid cols='12 9 10'>
            <input className="form-control" onChange={props.changeDescription} id="description" placeholder="Adicione uma tarefa" onKeyUp={keyHandler} value={props.description}/>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style="primary" onClick={() => props.addTodo(props.description)} icon="plus"/>
            <IconButton style="info" icon="search" onClick={() => props.search()}/>
            <IconButton style="default" icon="close" onClick={props.handleClear}/>
        </Grid>

    </div>   
    )
}

const mapStateToProps = state => ({
    description: state.todo.description,
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search, addTodo }, dispatch)

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        TodoForm
    )