const Form = ({ newTodoContent, handleNewTodoChange, addTodo }) => {
    return (
        <div className="form">
            <h3>Add a new</h3>
            <form className="form" onSubmit={addTodo}>
                <input
                    className="form__input"
                    placeholder="add a new..."
                    value={newTodoContent}
                    onChange={handleNewTodoChange}
                />
                <button className="form__submit" type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form
