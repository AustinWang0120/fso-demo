import Todo from "./components/Todo"

const App = ({ todos }) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default App
