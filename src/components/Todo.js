const Todo = ({ todo, handleToggle }) => {
    return (
        <li>
            <input
                type="checkbox"
                id={todo.id}
                checked={todo.completed ? true : false}
                onChange={() => {}}
                onClick={handleToggle}
            />
            <label
                htmlFor={todo.id}
                style={todo.completed ? { textDecoration: "line-through" } : {}}
            >
                {todo.content}
            </label>
        </li>
    )
}

export default Todo
