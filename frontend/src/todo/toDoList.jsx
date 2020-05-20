import React from 'react'
import IconButton from '../template/iconButton'

import { connect } from 'react-redux'

import { handleMarkAsDone, handleMarkAsPending } from '../actions/todoActions'
import { bindActionCreators } from 'redux'

const List = props => 
{
 
    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(todo => {
                return(
                    <tr key={todo._id} className={todo.done ? 'markedAsDone' : ''}>
                        <td key={todo._id}>{todo.description}</td>
                        <td>
                            <IconButton hide={!todo.done} style="warning" icon="undo" onClick={() => props.handleMarkAsPending(todo)}/>
                            <IconButton hide={todo.done} style="success" icon="check" onClick={() => props.handleMarkAsDone(todo)}/>
                            <IconButton hide={!todo.done} style="danger" icon="trash-o" onClick={() => props.handleRemove(todo)}/>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ handleMarkAsDone, handleMarkAsPending }, dispatch)


export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        List
    )