const ListItem = (props) => {
    console.log(props)
    return (
        <div id="todo" className="ui segment">
            <div className="ui left aligned checkbox">
            <input type="checkbox" checked={props.tick} onChange={props.handleCheck}/>
            <label>Done</label>
            </div>
            <h3 id="todo-name" style={{textDecoration: (props.tick === true) ? "line-through" : "none"}}>{props.item}</h3>
            <div>
            <button className="ui red button" floated='right' color="red "onClick={props.deleteToDo}>Delete</button>
            </div>
        </div>

    )
}

export default ListItem