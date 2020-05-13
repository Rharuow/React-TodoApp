import React from 'react'

export default props => (
    <div>
        {console.log("PROPS LSIT", props.list)}
        <ul>
            {props.list.forEach(item => {
                console.log("item", item.description)
            })}
        </ul>
    </div>
)