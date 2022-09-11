import { MdDeleteForever } from 'react-icons/md';

const ListItem = (props) => {
    return (
        <div className="todo">
            <label className="checkbox-container">
            <input className="todo-checkbox" type="checkbox"
             checked={props.tick} onChange={props.handleCheck} />
            <span className="checkmark"></span>
            </label>
            <div className="list-container">
            <p className="todo-body" style={{ textDecoration: (props.tick === true) ? "line-through" : "none" }}>{props.item}</p>
            <div className="todo-delete">
            <MdDeleteForever onClick={props.deleteToDo}/>
            </div>
                {/* <button className="todo-delete" onClick={props.deleteToDo}>Delete</button> */}
            </div>
        </div>
    )
}

export default ListItem