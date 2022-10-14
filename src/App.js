import { useState } from "react"
import Todo from "./components/Todo"

const App = (props) => {
    const [todos, setTodos] = useState(props.todos)
    const [newTodoContent, setNewTodoContent] = useState("")

    const addTodo = (event) => {
        event.preventDefault()
        const newTodoObject = {
            content: newTodoContent,
            date: new Date().toISOString(),
            completed: false,
            id: todos.length + 1,
        }
        setTodos(todos.concat(newTodoObject))
        setNewTodoContent("")
    }

    const handleNewTodoChange = (event) => setNewTodoContent(event.target.value)

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTodo}>
                <input value={newTodoContent} onChange={handleNewTodoChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default App
