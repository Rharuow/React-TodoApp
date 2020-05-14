import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoForm">

        <Grid cols='12 9 10'>
            <input className="form-control" onChange={props.descriptionAction} id="description" placeholder="Adicione uma tarefa" value={props.value}/>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style="primary" onClick={props.action} icon="plus"/>
            <IconButton style="info" icon="search" onClick={props.handleSearch}/>
            <IconButton style="default" icon="close" onClick={props.handleClear}/>
        </Grid>

    </div>
)