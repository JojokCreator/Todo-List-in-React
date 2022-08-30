import { MdDeleteForever } from 'react-icons/md';

const ListItem = (props) => {
    console.log(props)
    return (
        <div className="todo">
            <label class="checkbox-container">
            <input className="todo-checkbox" type="checkbox"
             checked={props.tick} onChange={props.handleCheck} />
            <span class="checkmark"></span>
            </label>
            <div className="list-container">
            <p class="todo-body" style={{ textDecoration: (props.tick === true) ? "line-through" : "none" }}>{props.item}</p>
            <div className="todo-delete">
            <MdDeleteForever onClick={props.deleteToDo}/>
            </div>
                {/* <button class="todo-delete" onClick={props.deleteToDo}>Delete</button> */}
            </div>
        </div>
    )
}

export default ListItem