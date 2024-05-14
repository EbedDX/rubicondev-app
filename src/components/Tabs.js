import { useState } from "react"

function Tabs(props) { 

    let [ currentSection, setCurrentSection ] = useState ("tv")

    function handleSection (section){
        setCurrentSection(section)
        props.searchSectionAction(section)
    }

    return(
        <div className="watch-options">
            <button 
                onClick={e => handleSection("movie")}
                className={"movie-section " + (currentSection == "movie" ? "active" : "") }>Movie</button>
            <button 
            onClick={e => handleSection("tv")}
            className={"tvshow-section " + (currentSection == "tv" ? "active" : "") }>TV Show</button>
        </div>
    )
}

export default Tabs