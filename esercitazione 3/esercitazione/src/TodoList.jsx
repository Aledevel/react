import { useState } from 'react'

export function TodoList() {
	const [todos, setTodos] = useState([])

	function handleAddTodo(event) {
		event.preventDefault()

		const todo = event.target.elements.todo.value

		setTodos((todos) => [...todos, todo])
	}
		function HandleResetTodo(){
			setTodos([])
		}
	return (
		<div className="flex flex-col bg-slate-300 gap-2 h-40 w-60 " >
			<form className="form" onSubmit={handleAddTodo} >
				<input className="InputLabel"  data-testid="todo-input" name="todo" className='bg-white border-slate-600' />
				<button className="button" type="submit">Add</button>
				<button className="button" type='reset' onClick={HandleResetTodo} >Remove All</button>
			</form>

			<ul data-testid="todo-list">
				{todos.map((todo, index) => (<li key={index}> {todo} <button type='reset' onClick={HandleResetTodo} >Remove</button> </li>))}
			</ul>
		</div>
	)
}
// Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable.
// The todos state variable should be an array of strings.
// The TodoList component should also contain an input tag and a button.
// When the button is clicked, the event handler should add the value of the input tag to the todos array.
// Add a "reset" button that clears the todos array when clicked.
// Modify the TodoList by adding a "remove" button to each li tag.
// When clicked, the event handler should remove corresponding item from the todos array.