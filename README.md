# Simple Todo List - Built with React.

Check out a live [version here](https://react-todolist-joe.netlify.app/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features
<ul>
<li>Ability to add new todos to the list</li>
<li>Toggle the todo as done</li>
<li>Filter the todo's by pending, done or show all</li>
<li>Delete a todo</li>
</ul>

The styling is done using Semantic UI but could still do with a little work on the aesthetics.

## Latest additions

I recently added a [backend](https://github.com/JojokCreator/go-todo-api) to this project. It consists of a server written in Go that links the data to a MongoDB Database. I also added useContext and useReducer to enable the todo's to be updated in real time when they are added or deleted.
