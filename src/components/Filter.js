const Filter = ({ keyword, handleKeywordChange, handleShowClick, showAll }) => {
    return (
        <div>
            <h3>Filter</h3>
            <input value={keyword} onChange={handleKeywordChange} />
            <button
                className="form__button"
                type="button"
                onClick={handleShowClick}
            >
                Show {showAll ? "uncompleted" : "all"}
            </button>
        </div>
    )
}

export default Filter
