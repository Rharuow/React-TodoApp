import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => { 
    
    const keyHandler = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.action()
        } else if(e.key === "Escape") {
            props.handleClear()
        }
    }
    
    return(
        <div role="form" className="todoForm">

        <Grid cols='12 9 10'>
            <input className="form-control" onChange={props.descriptionAction} id="description" placeholder="Adicione uma tarefa" onKeyUp={keyHandler} value={props.value}/>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style="primary" onClick={props.action} icon="plus"/>
            <IconButton style="info" icon="search" onClick={props.handleSearch}/>
            <IconButton style="default" icon="close" onClick={props.handleClear}/>
        </Grid>

    </div>   
    )
}