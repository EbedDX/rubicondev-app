function SearchBar(props) {

    return (
        <div className="search-bar">
            <input type="text" onChange={e => props.searchStringAction(e.target.value)} placeholder="Search for TV Shows and Movies.."/>
            <button>
                <i className="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}}></i>
            </button>
        </div>

    )
}

export default SearchBar