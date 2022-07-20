const InputForm = (props) => {
	return (
		<>
			<h1>Todo List</h1>
			<div>
			<input className="box" placeholder="Todo goes here..." onChange={props.theValue}></input>
			<button class="positive ui button" onClick={props.onClickToDo}>
				Add a todo
			</button>
			</div>
			<br />
			<h3>Filters:</h3>
			<div class="ui buttons">
				<button class="green ui button" onClick={props.filterPending}>Pending</button>
				<div class="or"></div>
				<button class="blue ui button" onClick={props.filterDone}>Done</button>
				<div class="or"></div>
				<button class="green ui button" onClick={props.filterAll}>All</button>
			</div>
			</>
	);
};

export default InputForm;
