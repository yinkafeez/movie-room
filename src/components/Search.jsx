import {AiOutlineSearch} from "react-icons/ai"
import { useState } from "react"

function Search({ searchMovies }) {

    const[searchTerm,setSearchTerm] = useState('')
    function onChange() {
        searchMovies(searchTerm)
        setSearchTerm('')
    }

    return(
        <div className="search-container">
            <input
                type="text"
                placeholder = "Search for movies"
                className="search-input" 
                value = {searchTerm}
                onChange ={(e) => setSearchTerm(e.target.value)}
            />
            <AiOutlineSearch  
                className="search-icon" 
                onClick={ onChange}
            />
        </div>
        
    )
}

export default Search