const InputForm = (props) => {
	return (
		<>
			<h1>Todo List</h1>
			<div className="ui input">
			<input className="box" placeholder="Todo goes here..." onChange={props.theValue}></input>
			<button className="positive ui button" onClick={props.onClickToDo}>
				Add a todo
			</button>
			</div>
			<br />
			<h3>Filters:</h3>
			<div className="ui buttons">
				<button className="green ui button" onClick={props.filterPending}>Pending</button>
				<div className="or"></div>
				<button className="blue ui button" onClick={props.filterDone}>Done</button>
				<div className="or"></div>
				<button className="green ui button" onClick={props.filterAll}>All</button>
			</div>
			</>
	);
};

export default InputForm;
