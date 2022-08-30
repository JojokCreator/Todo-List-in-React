const InputForm = (props) => {
	return (
		<>
			<div className="form">
				<div className="filters">
			<h3>Filters:</h3>
				<p className="filter" onClick={props.filterPending}>Pending</p>
				<div className="or"></div>
				<p className="filter" onClick={props.filterDone}>Done</p>
				<div className="or"></div>
				<p className="filter" onClick={props.filterAll}>All</p>
			</div>
			<button onClick={props.onClickToDo}>
				+
			</button>
			<input className="form-input" placeholder="Add new todo here..." onChange={props.theValue}></input>
			</div>
			<br />
			<div className="filters">
			</div>
			</>
	);
};

export default InputForm;
