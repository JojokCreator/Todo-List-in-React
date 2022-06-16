import React from 'react'
import { Checkbox, Button, List } from 'semantic-ui-react'

const ListItem = (props) => {
    return (

        <List.Item id='todo'>
            <Checkbox checked={props.tick} onChange={props.handleCheck} type='checkbox'></Checkbox>
            <h3 id="todo-name">{props.item}</h3>
            <div>
            <Button floated='right' color="red "onClick={props.deleteToDo}>Delete this todo</Button>
            </div>
        </List.Item>

    )
}

export default ListItem