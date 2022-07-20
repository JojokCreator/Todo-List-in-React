const ListItem = (props) => {
    console.log(props.tick)
    return (
        <div id="todo" class="ui segment">
            <div class="ui left aligned checkbox">
            <input type="checkbox" checked={props.tick} onChange={props.handleCheck}/>
            <label>Done</label>
            </div>
            <h3 id="todo-name" style={{textDecoration: (props.tick === true) ? "line-through" : "none"}}>{props.item}</h3>
            <div>
            <button class="ui red button" floated='right' color="red "onClick={props.deleteToDo}>Delete this todo</button>
            </div>
        </div>

    )
}

export default ListItem