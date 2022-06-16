import React from 'react'
import { List } from 'semantic-ui-react'

const ListH = (props) => {
    return (
        <List divided relaxed>{props.children}</List>
    )
}

export default ListH