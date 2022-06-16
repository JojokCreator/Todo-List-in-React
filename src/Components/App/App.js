import React from "react";
import "./App.css";
import InputForm from "../Input";
import ListH from "../List";
import ListItem from "../List/ListItem";
import { useState } from "react";

function App() {
	const [InputValue, setInputValue] = useState("");
	const [toList, setList] = useState([]);
	const [filterValue, setfilterValue] = useState();

	function handleChange(e) {
		setInputValue(e.target.value);
	}

	function onClickToDo() {
		const newTask = {
			id: Math.floor(Math.random() * 1000),
			name: InputValue,
			completed: false,
		};
		setList([...toList, newTask]);
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

	let filteredProductList = [...toList].filter((item) => {
		if (filterValue === "done") {
			return item.completed === true;
		} else if (filterValue === "pending") {
			return item.completed === false;
		} else {
			return item;
		}
	});

	function deleteToDo(id) {
		const removeItems = [...toList].filter((item) => item.id !== id);
		setList(removeItems);
	}

	function handleCheck(id) {
		const newList = toList.map((item) => {
			if (item.id === id) return { ...item, completed: !item.completed };
			return item;
		});
		setList(newList);
	}

	return (
		<div className="App">
			<InputForm
				theValue={handleChange}
				onClickToDo={onClickToDo}
				filterPending={filterToDo}
				filterDone={filterDone}
				filterAll={filterAll}
			/>
			<ListH>
				{filteredProductList.map((item) => (
					<ListItem
						item={item.name}
						key={item.id}
						handleCheck={() => {
							handleCheck(item.id);
						}}
						tick={item.completed}
						deleteToDo={() => {
							deleteToDo(item.id);
						}}
					/>
				))}
			</ListH>
		</div>
	);
}

export default App;
