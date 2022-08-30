import React, { useEffect } from "react";
import "./App.css";
import InputForm from "../Input";
import List from "../List";
import ListItem from "../List/ListItem";
import { useState } from "react";
import { useTodosContext } from "../../hooks/useTodosContext"

function App() {
	const [InputValue, setInputValue] = useState("");
	const [filterValue, setfilterValue] = useState([]);
	const { todos, dispatch } = useTodosContext()

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch('https://go-todo-back-end.onrender.com/task');
			const response = await data.json();
			(response) ?
				dispatch({ type: 'SET_TODOS', payload: response })
				:
				dispatch({ type: 'SET_TODOS', payload: [] })
		}
		fetchData()
			.catch(console.error);
	}, [dispatch])


	function handleChange(e) {
		setInputValue(e.target.value);
	}

	function onClickToDo() {
		const newTask = {
			task: InputValue,
			status: false,
		};
		fetch('https://go-todo-back-end.onrender.com/task', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newTask)
		})
		dispatch({ type: 'CREATE_TODO', payload: newTask })
	}

	function filterToDo() {
		setfilterValue("pending");
	}

	function filterDone() {
		setfilterValue("done");
	}
	function filterAll() {
		setfilterValue("");
	}

	let filteredProductList = todos.filter((item) => {
		if (filterValue === "done") {
			return item.status === true;
		} else if (filterValue === "pending") {
			return item.status === false;
		} else {
			return item;
		}
	});

	function deleteToDo(_id) {
		fetch(`https://go-todo-back-end.onrender.com/deleteTask/${_id}`, {
			method: 'DELETE',
		})
		dispatch({ type: 'DELETE_TODO', payload: _id })
	}

	function handleCheck(_id) {
		todos.map((item) => {
			if (item._id === _id)
				if (item.status === false) {
					fetch(`https://go-todo-back-end.onrender.com/task/${_id}`, {
						method: 'PUT',
					})
					dispatch({ type: 'TOGGLE', payload: _id })
				} else {
					fetch(`https://go-todo-back-end.onrender.com/undoTask/${_id}`, {
						method: 'PUT',
					})
					dispatch({ type: 'TOGGLE', payload: _id })
				}
			return item;
		});
	}

	return (
		<div className="container">
			<h1 className="title">Todo List</h1>
			<div className="form">
			<InputForm
				theValue={handleChange}
				onClickToDo={onClickToDo}
				filterPending={filterToDo}
				filterDone={filterDone}
				filterAll={filterAll}
			/>
			</div>
			<div className="todoList">
			<List>
				{filteredProductList.map((item) => (
					<ListItem
						key={item._id}
						item={item.task}
						handleCheck={() => {
							handleCheck(item._id);
						}}
						tick={item.status}
						deleteToDo={() => {
							deleteToDo(item._id);
						}}
					/>
				))}
				</List>
				</div>
		</div>
	);
}

export default App;
