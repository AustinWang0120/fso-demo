const Filter = ({ keyword, handleKeywordChange, handleShowClick, showAll }) => {
    return (
        <div className="filter">
            <h3>Filter</h3>
            <input
                className="filter__input"
                value={keyword}
                onChange={handleKeywordChange}
            />
            <button
                className="filter__button"
                type="button"
                onClick={handleShowClick}
            >
                Show {showAll ? "uncompleted" : "all"}
            </button>
        </div>
    )
}

export default Filter
