import { useState } from 'react'

export function TodoList() {
	const [todos, setTodos] = useState([])

	function handleAddTodo(event) {
		event.preventDefault()

		const todo = event.target.elements.todo.value

		setTodos((todos) => [...todos, todo])
	}

	return (
		<div>
			<form onSubmit={handleAddTodo}>
				<input data-testid="todo-input" name="todo" />
				<button type="submit">Add</button>
			</form>

			<ul data-testid="todo-list">
				{todos.map((todo, index) => (<li key={index}> {todo} </li>))}
			</ul>
		</div>
	)
}
// Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable.
// The todos state variable should be an array of strings.
// The TodoList component should also contain an input tag and a button.
// When the button is clicked, the event handler should add the value of the input tag to the todos array.