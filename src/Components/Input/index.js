import { Button, Input, Form } from "semantic-ui-react";

const InputForm = (props) => {
	return (
		<Form>
			<h1>Todo List</h1>
			<Input placeholder="Todo goes here..." onChange={props.theValue}></Input>
			<Button color='blue' onClick={props.onClickToDo}>
				Add a todo
			</Button>
			<br />
			<h3>Filters:</h3>
			<Button.Group>
				<Button color='blue' onClick={props.filterPending}>Pending</Button>
				<Button.Or />
				<Button color='green' onClick={props.filterDone}>Done</Button>
				<Button.Or />
				<Button color='blue' onClick={props.filterAll}>All</Button>
			</Button.Group>
		</Form>
	);
};

export default InputForm;
